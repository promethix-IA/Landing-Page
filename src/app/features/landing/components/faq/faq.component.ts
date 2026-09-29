import { Component } from '@angular/core';
import { FAQ_ITEMS } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  readonly items = FAQ_ITEMS;
}
