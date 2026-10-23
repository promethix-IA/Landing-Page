import { Component } from '@angular/core';
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_DISPLAY,
  DEMO_MAILTO,
  FOOTER_COLUMNS,
  WHATSAPP_URL,
} from '../../core/constants/landing.constants';
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
  readonly contactEmail = CONTACT_EMAIL;
  readonly whatsappDisplay = CONTACT_WHATSAPP_DISPLAY;
  readonly social = [
    { label: 'WhatsApp', href: WHATSAPP_URL },
    { label: CONTACT_EMAIL, href: DEMO_MAILTO },
  ];
}
