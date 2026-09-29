import { Component } from '@angular/core';
import { AI_FEATURES } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-ai-features',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './ai-features.component.html',
  styleUrl: './ai-features.component.scss',
})
export class AiFeaturesComponent {
  readonly features = AI_FEATURES;
}
