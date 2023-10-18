import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    constructor() { }

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
}
