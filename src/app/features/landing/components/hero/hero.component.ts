import { Component } from '@angular/core';
import { CONTACT_EMAIL, DEMO_MAILTO, HERO_CHIPS, WHATSAPP_URL } from '../../../../core/constants/landing.constants';
import { BtnComponent } from '../../../../shared/components/btn/btn.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [BtnComponent, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly demoMailto = DEMO_MAILTO;
  readonly whatsappUrl = WHATSAPP_URL;
  readonly contactEmail = CONTACT_EMAIL;
  readonly chips = HERO_CHIPS;
  readonly bars = [42, 58, 51, 72, 65, 80, 74];
  readonly topProducts = [
    { name: 'Café premium', sales: '128 uds' },
    { name: 'Gaseosa 400ml', sales: '96 uds' },
    { name: 'Arroz 1kg', sales: '84 uds' },
  ];
}
