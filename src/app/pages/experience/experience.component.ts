import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { SeoService } from '../../core/services/seo.service';

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
export class ExperienceComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Work Experience - Prince Ivan Kent Tiburcio | 7 Years in Full Stack Development',
      description: 'Discover my 7-year journey in full-stack development, including roles at RCG IT (Disney projects), ATLAS Express Padala, Tawitech, and Isuzu Philippines. Expertise in Angular, Node.js, and .NET Core.',
      keywords: 'Work Experience, Full Stack Developer Career, Disney Developer, Angular Developer Jobs, Node.js Experience, .NET Core Developer',
      canonicalUrl: 'https://princeivankent.github.io/my-portfolio/experience'
    });
  }
  experiences: Experience[] = [
    {
      role: 'Angular/Node.js Developer',
      company: 'RCG Information Technology',
      location: 'Makati City',
      period: '2022 - Present',
      description: [
        'Contributed to enterprise-scale systems for Disney as part of a development team, delivering robust and scalable solutions using Angular, Node.js, and AWS',
        'Collaborated on the Garment Utilization System Replacement (GUSR) to streamline costume tracking and usage analytics across Disney parks',
        'Worked with the team to build the Disney Dine Reservation System, enhancing guest dining experience through real-time availability and booking features',
        'Partnered with cross-functional teams to ensure system scalability, performance optimization, and compliance with technical standards'
      ],
      technologies: ['Angular', 'Node.js', 'AWS Lambda', 'WebAPI']
    },
    {
      role: 'Full Stack Developer',
      company: 'ATLAS Express Padala, Inc.',
      location: 'Las Piñas City',
      period: '2021 - 2022',
      description: [
        'Collaborated with the development team on full-stack logistics and financial solutions using Angular, .NET Core, and Ionic for AXP\'s global operations',
        'Contributed to building the AXP Money Remittance Web App, enabling secure overseas-to-Philippines money transfers with real-time transaction tracking',
        'Worked with the team to deliver the AXP Freight Management System (Web & Mobile) for managing deliveries and driver routes',
        'Independently developed and launched the standalone AXP Customer App for package tracking and service requests, improving customer engagement',
        'Improved system performance and data integrity by optimizing SQL queries, backend APIs, and mobile responsiveness'
      ],
      technologies: ['Angular', 'Ionic Capacitor', '.NET Core', 'SQL']
    },
    {
      role: 'Mid Software Developer',
      company: 'Tawitech, Inc.',
      location: 'Cabuyao City',
      period: '2019 - 2021',
      description: [
        'Collaborated with the team to build and maintain web and mobile apps using Vue.js, Firebase, and Android technologies',
        'Contributed to developing custom CMS platforms (AYUN! and e-Log) that reduced manual content updates by 60%',
        'Worked with the team to create the AYUN! Asset Tracking App and e-Log Contact Tracing App for real-time data capture',
        'Independently designed and launched a responsive website for Easy Homes Inc., boosting client engagement and online leads',
        'Resolved performance bottlenecks by optimizing frontend components and Firebase queries, improving app responsiveness by 40%'
      ],
      technologies: ['Vue.js', 'Firebase', 'NoSQL', 'Android', 'Java']
    },
    {
      role: 'Web Developer',
      company: 'Isuzu Philippines Corporation',
      location: 'Biñan City',
      period: '2018 - 2019',
      description: [
        'Independently developed the e-learning platform while collaborating with the team on other internal platforms including fleet training and request portals',
        'Resolved legacy system issues by migrating code to Laravel and optimizing backend logic',
        'Collaborated with the team to design a barcode-based system that streamlined canteen transactions and reduced manual logging errors by over 80%',
        'Coordinated with cross-functional teams to identify pain points and deliver tailored business solutions'
      ],
      technologies: ['Laravel', 'PHP', 'MySQL', 'JavaScript']
    }
  ];
}
