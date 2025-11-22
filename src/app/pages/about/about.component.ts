import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'About Me - Prince Ivan Kent Tiburcio | Full Stack Developer',
      description: 'Learn about Prince Ivan Kent Tiburcio, a passionate Full Stack Developer with 7 years of experience in Angular, Node.js, .NET Core, and cloud technologies. Discover my journey, skills, and technical expertise.',
      keywords: 'About Prince Ivan Kent, Full Stack Developer Skills, Angular Expert, Node.js Developer, .NET Core, Web Developer Biography',
      canonicalUrl: 'https://princeivankent.github.io/my-portfolio/about'
    });
  }
}
