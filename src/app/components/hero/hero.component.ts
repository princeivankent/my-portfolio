import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('heroSection') heroSection!: ElementRef;

  displayedText = '';
  fullText = 'Prince Ivan Kent';
  typewriterIndex = 0;
  typewriterInterval: any;

  // Tech stack items for staggered animation
  techStack = [
    { name: 'Angular', color: 'blue' },
    { name: 'Node.js', color: 'purple' },
    { name: 'TypeScript', color: 'cyan' },
    { name: '.NET Core', color: 'blue' },
    { name: 'AWS', color: 'purple' },
    { name: 'Vue.js', color: 'cyan' }
  ];

  // Mouse position for parallax effect
  mouseX = 0;
  mouseY = 0;

  ngOnInit() {
    // Start typewriter effect after a delay
    setTimeout(() => this.startTypewriter(), 500);

    // Add mouse move listener for parallax and custom cursor
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.initCustomCursor();
  }

  ngAfterViewInit() {
    // Trigger entrance animations
    this.triggerEntranceAnimations();
  }

  ngOnDestroy() {
    if (this.typewriterInterval) {
      clearInterval(this.typewriterInterval);
    }
    document.removeEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  startTypewriter() {
    this.typewriterInterval = setInterval(() => {
      if (this.typewriterIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.typewriterIndex);
        this.typewriterIndex++;
      } else {
        clearInterval(this.typewriterInterval);
      }
    }, 100);
  }

  handleMouseMove(event: MouseEvent) {
    this.mouseX = (event.clientX / window.innerWidth - 0.5) * 20;
    this.mouseY = (event.clientY / window.innerHeight - 0.5) * 20;
  }

  getParallaxStyle(depth: number) {
    return {
      transform: `translate(${this.mouseX * depth}px, ${this.mouseY * depth}px)`
    };
  }

  triggerEntranceAnimations() {
    // Use Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe elements that should animate on scroll
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));
  }

  getTechStackDelay(index: number): string {
    return `${index * 100}ms`;
  }

  initCustomCursor() {
    // Only on devices with fine pointer (desktop)
    if (window.matchMedia('(pointer: fine)').matches) {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      const cursorDot = document.querySelector('.custom-cursor-dot') as HTMLElement;

      if (cursor && cursorDot) {
        document.addEventListener('mousemove', (e) => {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
          cursorDot.style.left = e.clientX + 'px';
          cursorDot.style.top = e.clientY + 'px';
        });

        // Expand cursor on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .tech-badge');
        interactiveElements.forEach(el => {
          el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.borderColor = 'rgba(168, 85, 247, 0.8)';
          });
          el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.borderColor = 'rgba(59, 130, 246, 0.5)';
          });
        });
      }
    }
  }
}
