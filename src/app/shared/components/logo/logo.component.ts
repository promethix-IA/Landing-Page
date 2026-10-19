import { Component, Input } from '@angular/core';
import { BRAND_NAME } from '../../../core/constants/landing.constants';

/**
 * Logo de Promethixia: llama (Prometeo) con barras de crecimiento (POS)
 * y chispa dorada (IA). En el nombre se resalta "ia".
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <span class="inline-flex items-center gap-2.5 font-display font-bold tracking-tight" [style.font-size.rem]="textSize">
      <img
        src="/brand/promethixia-mark.svg"
        [alt]="showName ? '' : brand"
        [width]="size"
        [height]="size"
        class="shrink-0 drop-shadow-[0_6px_14px_rgba(27,110,243,0.35)]"
      />
      @if (showName) {
        <span [class]="tone === 'light' ? 'text-white' : 'text-navy-900'">Promethix<span
          class="bg-clip-text text-transparent"
          [class]="tone === 'light' ? 'bg-gradient-to-br from-brand-300 to-brand-500' : 'bg-gradient-to-br from-brand-500 to-brand-700'"
        >ia</span></span>
      }
    </span>
  `,
})
export class LogoComponent {
  @Input() size = 36;
  @Input() textSize = 1.2;
  @Input() tone: 'dark' | 'light' = 'dark';
  @Input() showName = true;
  readonly brand = BRAND_NAME;
}
