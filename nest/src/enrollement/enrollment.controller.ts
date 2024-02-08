import { Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/Roles/roles.guard';
import { Role } from 'src/Roles/Role.enum';
import { Roles } from 'src/Roles/roles.decorator';
import { ObjectId } from 'mongoose';
import { Courses } from 'src/Schemas/courses/courses';

@Controller('enrollement')
export class EnrollementController {

    /**
     *
     */
    constructor(private readonly EnrollmentService: EnrollmentService, private readonly authService: AuthService) { }

    @HttpCode(HttpStatus.CREATED)
    @Post(':courseId')
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.Admin, Role.User)
    async enrollUserToCourse(@Param('courseId') courseId: string, @Req() request) {
        try {
            const updatedCourse = await this.EnrollmentService.registerUserToCourse(this.authService.extractTokenFromHeader(request), courseId);
            return { course: updatedCourse };
        } catch (error) {
            return { error: error.message };
        }
    }

    @HttpCode(HttpStatus.OK)
    @Get()
    @UseGuards(AuthGuard, RolesGuard)
    @Roles(Role.Admin)
    async getEnrollments(@Query('courseId') courseId: ObjectId | Courses, @Req() request) {
        try {

            console.log(courseId);

            return await this.EnrollmentService.getCourseEnrollment(courseId);
        } catch (error) {
            return { error: error.message };
        }
    }


}
