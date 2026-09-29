import { Component } from '@angular/core';
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
  readonly bars = [42, 58, 51, 72, 65, 80, 74];
  readonly topProducts = [
    { name: 'Café premium', sales: '128 uds' },
    { name: 'Gaseosa 400ml', sales: '96 uds' },
    { name: 'Arroz 1kg', sales: '84 uds' },
  ];
}
