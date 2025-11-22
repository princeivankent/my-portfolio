import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private router = inject(Router);

  private readonly defaultMetadata: PageMetadata = {
    title: 'Prince Ivan Kent Tiburcio - Full Stack Developer',
    description: 'Results-driven Full Stack Developer with 7 years of experience specializing in Angular, Node.js, .NET Core, and modern web technologies. View my portfolio of enterprise-scale applications.',
    keywords: 'Full Stack Developer, Angular Developer, Node.js, .NET Core, TypeScript, JavaScript, Web Development, Software Engineer, Prince Ivan Kent Tiburcio',
    ogType: 'website',
    ogImage: 'https://princeivankent.github.io/my-portfolio/assets/og-image.jpg',
    twitterCard: 'summary_large_image'
  };

  private readonly siteUrl = 'https://princeivankent.github.io/my-portfolio';

  constructor() {
    // Update canonical URL on route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateCanonicalUrl(this.siteUrl + event.urlAfterRedirects);
      });
  }

  /**
   * Updates all SEO meta tags for a page
   */
  updateMetadata(metadata: Partial<PageMetadata>): void {
    const meta: PageMetadata = { ...this.defaultMetadata, ...metadata };

    // Update title
    this.titleService.setTitle(meta.title);

    // Update standard meta tags
    this.meta.updateTag({ name: 'description', content: meta.description });
    if (meta.keywords) {
      this.meta.updateTag({ name: 'keywords', content: meta.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: meta.ogTitle || meta.title });
    this.meta.updateTag({ property: 'og:description', content: meta.ogDescription || meta.description });
    this.meta.updateTag({ property: 'og:type', content: meta.ogType || 'website' });
    this.meta.updateTag({ property: 'og:url', content: meta.canonicalUrl || this.siteUrl });
    if (meta.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: meta.ogImage });
      this.meta.updateTag({ property: 'og:image:alt', content: meta.ogTitle || meta.title });
    }

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: meta.twitterCard || 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: meta.twitterTitle || meta.title });
    this.meta.updateTag({ name: 'twitter:description', content: meta.twitterDescription || meta.description });
    if (meta.twitterImage || meta.ogImage) {
      this.meta.updateTag({ name: 'twitter:image', content: meta.twitterImage || meta.ogImage || '' });
      this.meta.updateTag({ name: 'twitter:image:alt', content: meta.twitterTitle || meta.title });
    }

    // Update canonical URL
    if (meta.canonicalUrl) {
      this.updateCanonicalUrl(meta.canonicalUrl);
    }
  }

  /**
   * Updates the canonical URL
   */
  private updateCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  /**
   * Adds structured data (JSON-LD) to the page
   */
  addStructuredData(data: Record<string, any>): void {
    let script: HTMLScriptElement | null = document.querySelector('script[type="application/ld+json"]');

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
  }

  /**
   * Gets structured data for the portfolio website
   */
  getPersonStructuredData(): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Prince Ivan Kent Tiburcio',
      jobTitle: 'Full Stack Developer',
      description: 'Results-driven Full Stack Developer with 7 years of experience specializing in Angular, Node.js, .NET Core, and modern web technologies.',
      url: this.siteUrl,
      sameAs: [
        'https://github.com/princeivankent',
        'https://www.linkedin.com/in/princeivankent'
      ],
      knowsAbout: [
        'Angular',
        'Node.js',
        '.NET Core',
        'TypeScript',
        'JavaScript',
        'Vue.js',
        'Web Development',
        'Full Stack Development',
        'AWS',
        'Firebase'
      ],
      alumniOf: {
        '@type': 'Organization',
        name: 'Your University' // Update with actual education
      }
    };
  }

  /**
   * Gets structured data for the website
   */
  getWebSiteStructuredData(): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Prince Ivan Kent Tiburcio - Portfolio',
      description: 'Professional portfolio showcasing full-stack development expertise and projects',
      url: this.siteUrl,
      author: {
        '@type': 'Person',
        name: 'Prince Ivan Kent Tiburcio'
      },
      inLanguage: 'en-US'
    };
  }

  /**
   * Gets structured data for a portfolio project
   */
  getProjectStructuredData(project: {
    name: string;
    description: string;
    url?: string;
    technologies: string[];
  }): Record<string, any> {
    return {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.name,
      description: project.description,
      creator: {
        '@type': 'Person',
        name: 'Prince Ivan Kent Tiburcio'
      },
      keywords: project.technologies.join(', '),
      ...(project.url && { url: project.url })
    };
  }
}
