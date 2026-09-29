import { Component } from '@angular/core';
import { INTEGRATIONS } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-integrations',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './integrations.component.html',
  styleUrl: './integrations.component.scss',
})
export class IntegrationsComponent {
  readonly items = INTEGRATIONS;
}
