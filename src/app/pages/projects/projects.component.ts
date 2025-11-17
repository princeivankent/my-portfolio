import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterLink, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Disney Garment Utilization System (GUSR)',
      description: 'Enterprise-scale system for Disney parks to streamline costume tracking and usage analytics. Replaced legacy system and improved inventory accuracy across multiple park locations.',
      technologies: ['Angular', 'Node.js', 'AWS Lambda', 'WebAPI'],
      category: 'Enterprise',
      featured: true
    },
    {
      title: 'Disney Dine Reservation System',
      description: 'Real-time dining reservation platform enhancing guest experience with availability tracking, booking, and confirmation features across multiple Disney restaurant locations.',
      technologies: ['Angular', 'Node.js', 'AWS', 'Real-time APIs'],
      category: 'Enterprise',
      featured: true
    },
    {
      title: 'AXP Money Remittance Web App',
      description: 'Secure overseas-to-Philippines money transfer platform with real-time transaction tracking, enabling seamless international financial transactions for AXP customers.',
      technologies: ['Angular', '.NET Core', 'SQL', 'Payment Gateway'],
      category: 'Financial',
      featured: true
    },
    {
      title: 'AXP Freight Management System',
      description: 'Comprehensive web and mobile solution for managing deliveries, driver routes, and shipment tracking. Streamlined logistics coordination for AXP\'s global operations.',
      technologies: ['Angular', 'Ionic', '.NET Core', 'Google Maps API'],
      category: 'Logistics',
      featured: false
    },
    {
      title: 'AXP Customer App',
      description: 'Standalone mobile application for package tracking and service requests. Improved customer engagement and reduced manual inquiries by 40%.',
      technologies: ['Ionic', 'Angular', '.NET Core', 'Push Notifications'],
      category: 'Mobile',
      featured: false
    },
    {
      title: 'AYUN! CMS Platform',
      description: 'Custom content management system that reduced manual content updates by 60% and improved admin usability for multiple client websites.',
      technologies: ['Vue.js', 'Firebase', 'NoSQL', 'Real-time Database'],
      category: 'CMS',
      featured: false
    },
    {
      title: 'cLog Contact Tracing App',
      description: 'Real-time contact tracing application for COVID-19 pandemic response, enabling efficient data capture and health monitoring.',
      technologies: ['Vue.js', 'Firebase', 'QR Code', 'Real-time Sync'],
      category: 'Mobile',
      featured: false
    },
    {
      title: 'AYUN! Asset Tracking System',
      description: 'Real-time asset tracking application improving operational visibility and inventory management for enterprise clients.',
      technologies: ['Vue.js', 'Firebase', 'Barcode Scanner', 'Analytics'],
      category: 'Enterprise',
      featured: false
    },
    {
      title: 'Easy Homes Inc. Website',
      description: 'Responsive real estate website that boosted client engagement and online leads through modern design and user experience.',
      technologies: ['Vue.js', 'Firebase', 'Responsive Design', 'SEO'],
      category: 'Web',
      featured: false
    },
    {
      title: 'Isuzu E-Learning Portal',
      description: 'Internal training and e-learning platform for Isuzu Philippines, featuring course management, progress tracking, and certification systems.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'LMS'],
      category: 'Enterprise',
      featured: false
    },
    {
      title: 'Isuzu Barcode Canteen System',
      description: 'Barcode-based transaction system that streamlined canteen operations and reduced manual logging errors by over 80%.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Barcode'],
      category: 'Internal Tools',
      featured: false
    }
  ];
}
