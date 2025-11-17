import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience-card',
  imports: [CommonModule],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
  @Input() role: string = '';
  @Input() company: string = '';
  @Input() location: string = '';
  @Input() period: string = '';
  @Input() description: string[] = [];
  @Input() technologies: string[] = [];
  @Input() index: number = 0;
}
