import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // EmailJS configuration from environment
  private serviceId = environment.emailjs.serviceId;
  private templateId = environment.emailjs.templateId;
  private publicKey = environment.emailjs.publicKey;

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.publicKey);
  }

  /**
   * Sends an email using EmailJS
   * @param emailData The form data to send
   * @returns Promise that resolves when email is sent
   */
  async sendEmail(emailData: EmailData): Promise<void> {
    try {
      const templateParams = {
        from_name: emailData.name,
        from_email: emailData.email,
        subject: emailData.subject,
        message: emailData.message,
        to_name: 'Prince Ivan Kent Tiburcio', // Your name
      };

      await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams,
        this.publicKey
      );
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}
