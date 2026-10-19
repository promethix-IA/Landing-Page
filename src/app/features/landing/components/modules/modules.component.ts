import { Component, computed, signal } from '@angular/core';
import { MODULES, PERIPHERALS } from '../../../../core/constants/landing.constants';
import { ModuleId } from '../../../../core/models/landing.models';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-modules',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.scss',
})
export class ModulesComponent {
  readonly modules = MODULES;
  readonly peripherals = PERIPHERALS;
  readonly activeId = signal<ModuleId>('dashboard');
  readonly active = computed(() => this.modules.find((m) => m.id === this.activeId())!);

  // Datos de demostración para los mockups
  readonly bars = [42, 58, 51, 72, 65, 80, 74];
  readonly posProducts = [
    { name: 'Café premium', price: 8500 },
    { name: 'Gaseosa 400ml', price: 3200 },
    { name: 'Arroz 1kg', price: 4900 },
    { name: 'Pan artesanal', price: 4500 },
  ];
  readonly cart = [
    { name: 'Café premium', qty: 2, total: 17000 },
    { name: 'Gaseosa 400ml', qty: 3, total: 9600 },
    { name: 'Pan artesanal', qty: 1, total: 4500 },
  ];
  readonly cartTotal = this.cart.reduce((sum, item) => sum + item.total, 0);
  readonly stock = [
    { name: 'Arroz 1kg', category: 'Abarrotes', qty: 4, low: true },
    { name: 'Café premium', category: 'Bebidas', qty: 38, low: false },
    { name: 'Gaseosa 400ml', category: 'Bebidas', qty: 6, low: true },
    { name: 'Leche 1L', category: 'Lácteos', qty: 52, low: false },
  ];
  readonly customers = [
    { name: 'María Gómez', last: 'Hoy', total: 1240000 },
    { name: 'Carlos Ruiz', last: 'Ayer', total: 860000 },
    { name: 'Tienda La 14', last: 'Hace 3 días', total: 3150000 },
  ];

  select(id: ModuleId): void {
    this.activeId.set(id);
  }

  onTabKeydown(event: KeyboardEvent, index: number): void {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    const step = keys[event.key];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + this.modules.length) % this.modules.length;
    this.select(this.modules[next].id);
    const tabs = (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLElement>('[role="tab"]');
    tabs?.[next]?.focus();
  }

  format(value: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(value);
  }
}
