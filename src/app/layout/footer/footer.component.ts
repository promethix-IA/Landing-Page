import { Component } from '@angular/core';
import { BRAND_NAME, FOOTER_COLUMNS } from '../../core/constants/landing.constants';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  imports: [LogoComponent],
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  readonly brand = BRAND_NAME;
  readonly columns = FOOTER_COLUMNS;
  readonly year = new Date().getFullYear();
  readonly social = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Facebook', href: '#' },
  ];
}
