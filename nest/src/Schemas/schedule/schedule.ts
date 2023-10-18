import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types, Document } from "mongoose";
import { Courses } from "../courses/courses";

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {

    @Prop({ required: true })
    TimeBegin: Date;

    @Prop({ required: true })
    TimeEnd: Date;

    @Prop({ type: Types.ObjectId, ref: 'Courses' })
    Course: Types.ObjectId | Courses;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
