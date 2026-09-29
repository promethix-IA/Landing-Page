import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-pos-experience',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './pos-experience.component.html',
  styleUrl: './pos-experience.component.scss',
})
export class PosExperienceComponent {
  readonly categories = ['Todos', 'Bebidas', 'Abarrotes', 'Panadería'];
  readonly cart = [
    { name: 'Café premium', qty: 2, price: 8500, total: 17000 },
    { name: 'Gaseosa 400ml', qty: 3, price: 3200, total: 9600 },
    { name: 'Pan artesanal', qty: 1, price: 4500, total: 4500 },
  ];

  get subtotal(): number {
    return this.cart.reduce((sum, item) => sum + item.total, 0);
  }

  get tax(): number {
    return Math.round(this.subtotal * 0.19);
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  format(value: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
