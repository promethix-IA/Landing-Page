import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  template: `
    <a
      class="btn"
      [class.btn--primary]="variant === 'primary'"
      [class.btn--secondary]="variant === 'secondary'"
      [class.btn--ghost]="variant === 'ghost'"
      [class.btn--light]="variant === 'light'"
      [class.btn--block]="block"
      [href]="href || '#'"
      [attr.role]="href ? null : 'button'"
      (click)="onClick($event)"
    >
      <ng-content />
    </a>
  `,
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'light' = 'primary';
  @Input() href?: string;
  @Input() block = false;

  onClick(event: MouseEvent): void {
    if (!this.href) {
      event.preventDefault();
    }
  }
}
