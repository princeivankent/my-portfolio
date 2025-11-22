import { Component, OnInit, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home',
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetadata({
      title: 'Prince Ivan Kent Tiburcio - Full Stack Developer | Angular, Node.js, .NET Core Expert',
      description: 'Results-driven Full Stack Developer with 7 years of experience specializing in Angular, Node.js, .NET Core, and modern web technologies. View my portfolio of enterprise-scale applications.',
      keywords: 'Full Stack Developer, Angular Developer, Node.js, .NET Core, TypeScript, JavaScript, Web Development, Portfolio, Prince Ivan Kent Tiburcio',
      canonicalUrl: 'https://princeivankent.github.io/my-portfolio/'
    });
  }
}
