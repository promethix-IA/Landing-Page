import { NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  template: `
    <ng-template #content><ng-content /></ng-template>
    @if (link) {
      <a
        class="btn"
        [class.btn--primary]="variant === 'primary'"
        [class.btn--secondary]="variant === 'secondary'"
        [class.btn--ghost]="variant === 'ghost'"
        [class.btn--light]="variant === 'light'"
        [class.btn--block]="block"
        [routerLink]="link"
      >
        <ng-container [ngTemplateOutlet]="content" />
      </a>
    } @else {
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
        <ng-container [ngTemplateOutlet]="content" />
      </a>
    }
  `,
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  @Input() variant: 'primary' | 'secondary' | 'ghost' | 'light' = 'primary';
  @Input() href?: string;
  /** Ruta interna de Angular. Tiene prioridad sobre href. */
  @Input() link?: string;
  @Input() block = false;

  onClick(event: MouseEvent): void {
    if (!this.href) {
      event.preventDefault();
    }
  }
}
