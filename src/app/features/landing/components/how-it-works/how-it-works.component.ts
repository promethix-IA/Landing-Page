import { Component } from '@angular/core';
import { HOW_IT_WORKS } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent {
  readonly steps = HOW_IT_WORKS;
}
