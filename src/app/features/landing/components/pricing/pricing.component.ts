import { Component } from '@angular/core';
import { PRICING_PLANS } from '../../../../core/constants/landing.constants';
import { BtnComponent } from '../../../../shared/components/btn/btn.component';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [SectionHeaderComponent, BtnComponent, RevealDirective],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss',
})
export class PricingComponent {
  readonly plans = PRICING_PLANS;
}
