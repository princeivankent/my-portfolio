import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Angular/Node.js Developer',
      company: 'RCG Information Technology',
      location: 'Makati City',
      period: '2020 - Present',
      description: [
        'Contributed to enterprise-scale systems for Disney, delivering robust and scalable solutions using Angular, Node.js, and AWS',
        'Developed the Garment Utilization System Replacement (GUSR) to streamline costume tracking and usage analytics across Disney parks',
        'Built the Disney Dine Reservation System, enhancing guest dining experience through real-time availability and booking features',
        'Collaborated with cross-functional teams to ensure system scalability, performance optimization, and compliance with technical standards'
      ],
      technologies: ['Angular', 'Node.js', 'AWS Lambda', 'WebAPI']
    },
    {
      role: 'Full Stack Developer',
      company: 'ATLAS Express Padala, Inc.',
      location: 'Las Piñas City',
      period: '2018 - 2020',
      description: [
        'Developed full-stack logistics and financial solutions using Angular, .NET Core, and Ionic for AXP\'s global operations',
        'Built the AXP Money Remittance Web App, enabling secure overseas-to-Philippines money transfers with real-time transaction tracking',
        'Delivered the AXP Freight Management System (Web & Mobile) for managing deliveries and driver routes',
        'Launched the standalone AXP Customer App for package tracking and service requests, improving customer engagement',
        'Improved system performance and data integrity by optimizing SQL queries, backend APIs, and mobile responsiveness'
      ],
      technologies: ['Angular', 'Ionic', '.NET Core', 'SQL']
    },
    {
      role: 'Mid Software Developer',
      company: 'Tawitech, Inc.',
      location: 'Cabuyao City',
      period: '2017 - 2018',
      description: [
        'Built and maintained web and mobile apps using Vue.js, Firebase, and Android technologies',
        'Developed custom CMS platforms (AYUN! and cLog) that reduced manual content updates by 60%',
        'Created the AYUN! Asset Tracking App and cLog Contact Tracing App for real-time data capture',
        'Launched a responsive website for Easy Homes Inc., boosting client engagement and online leads',
        'Resolved performance bottlenecks by optimizing frontend components and Firebase queries, improving app responsiveness by 40%'
      ],
      technologies: ['Vue.js', 'Firebase', 'NoSQL', 'Android', 'Java']
    },
    {
      role: 'Web Developer',
      company: 'Isuzu Philippines Corporation',
      location: 'Biñan City',
      period: '2015 - 2017',
      description: [
        'Spearheaded development of multiple internal platforms including e-learning, fleet training, and request portals',
        'Resolved legacy system issues by migrating code to Laravel and optimizing backend logic',
        'Designed barcode-based system that streamlined canteen transactions and reduced manual logging errors by over 80%',
        'Coordinated with cross-functional teams to identify pain points and deliver tailored business solutions'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript']
    }
  ];
}
