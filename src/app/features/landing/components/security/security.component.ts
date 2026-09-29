import { Component } from '@angular/core';
import { SECURITY_ITEMS } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-security',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './security.component.html',
  styleUrl: './security.component.scss',
})
export class SecurityComponent {
  readonly items = SECURITY_ITEMS;
}
