import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as nodemailer from 'nodemailer';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class EmailService {
    constructor(@Inject(forwardRef(()=>UsersService)) private readonly userService:UsersService) { }

    public async sendEmail(to: string,name:string,course:string, time: Date): Promise<void> {
        try {
            
            // Create a transporter with Gmail SMTP service (Make sure to use a Gmail account with "less secure apps" enabled)
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'paradisepool232@gmail.com',
                    pass: 'chyjbntzrtqnzjav',
                },
                secure: false, // Set secure to false
                tls: {
                    rejectUnauthorized: false, // Set rejectUnauthorized to false
                },
            });

            // Send the email
            await transporter.sendMail({
                to: to,
                subject: 'Reminder About Your Course',
                text: 'Your email content here', // Plain text content
                html: `<b>Hi ${name},<br/> 
                We want to remind you- about your ${course}<br/>
                At ${time} tommorrow.<br/>
                 See You....</b>`, // HTML content
            });

            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }

    public async sendEmailTempToManager(temp: number, token: string): Promise<void> {
        
        const userDetails=await this.userService.getUserDetails(token);
        try {
            
            // Create a transporter with Gmail SMTP service (Make sure to use a Gmail account with "less secure apps" enabled)
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'paradisepool232@gmail.com',
                    pass: 'chyjbntzrtqnzjav',
                },
                secure: false, // Set secure to false
                tls: {
                    rejectUnauthorized: false, // Set rejectUnauthorized to false
                },
            });

            // Send the email
            await transporter.sendMail({
                to: (userDetails).email,
                subject: 'Update From Paradise Pool - - -',
                text: 'Your email content here', // Plain text content
                html: `<b>Hi ${userDetails.firstName},<br/> 
                The adapted temperature to your pool now: ${temp}</b>
                </br>Have a nice day!!`, 
            });

            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }


}
