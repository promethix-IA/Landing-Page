import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <header class="section-header" [class.section-header--center]="align === 'center'" [class.section-header--light]="tone === 'light'">
      @if (eyebrow) {
        <p class="eyebrow">{{ eyebrow }}</p>
      }
      <h2>{{ title }}</h2>
      @if (lead) {
        <p class="lead">{{ lead }}</p>
      }
    </header>
  `,
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input() lead = '';
  @Input() eyebrow = '';
  @Input() align: 'left' | 'center' = 'left';
  @Input() tone: 'dark' | 'light' = 'dark';
}
