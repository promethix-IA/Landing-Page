import { Component } from '@angular/core';
import { TRUST_ITEMS } from '../../../../core/constants/landing.constants';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './trust-bar.component.html',
  styleUrl: './trust-bar.component.scss',
})
export class TrustBarComponent {
  readonly items = TRUST_ITEMS;
}
