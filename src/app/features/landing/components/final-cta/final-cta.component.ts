import { Component } from '@angular/core';
import { CONTACT_EMAIL, DEMO_MAILTO, WHATSAPP_URL } from '../../../../core/constants/landing.constants';
import { BtnComponent } from '../../../../shared/components/btn/btn.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [BtnComponent, RevealDirective],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
})
export class FinalCtaComponent {
  readonly demoMailto = DEMO_MAILTO;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly contactEmail = CONTACT_EMAIL;
}
