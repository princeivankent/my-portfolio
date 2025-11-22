import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitted = false;
  errorMessage = '';

  constructor(private emailService: EmailService) {}

  async onSubmit() {
    if (this.isSubmitting) {
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.submitted = false;

    try {
      await this.emailService.sendEmail(this.formData);
      this.submitted = true;

      // Reset form after 3 seconds
      setTimeout(() => {
        this.submitted = false;
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, 3000);
    } catch (error) {
      this.errorMessage = error instanceof Error
        ? error.message
        : 'Failed to send email. Please try again later.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
