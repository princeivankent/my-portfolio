import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../core/services/email.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private seoService = inject(SeoService);
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

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Contact Me - Prince Ivan Kent Tiburcio | Let\'s Build Something Great',
      description: 'Get in touch with Prince Ivan Kent Tiburcio for full-stack development opportunities, collaborations, or project inquiries. Available for Angular, Node.js, and .NET Core projects.',
      keywords: 'Contact Full Stack Developer, Hire Angular Developer, Node.js Freelancer, .NET Core Developer Contact, Web Development Services',
      canonicalUrl: 'https://princeivankent.github.io/my-portfolio/contact'
    });
  }

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
