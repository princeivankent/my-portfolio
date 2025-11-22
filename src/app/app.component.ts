import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  private seoService = inject(SeoService);
  private router = inject(Router);
  title = 'my-portfolio';

  ngOnInit(): void {
    // Add structured data for the website and person
    this.addStructuredData();

    // Scroll to top on route change
    this.setupScrollToTop();
  }

  private setupScrollToTop(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  private addStructuredData(): void {
    // Add Person and WebSite structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        this.seoService.getPersonStructuredData(),
        this.seoService.getWebSiteStructuredData()
      ]
    };

    this.seoService.addStructuredData(structuredData);
  }
}
