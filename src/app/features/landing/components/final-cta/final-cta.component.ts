import { Component } from '@angular/core';
import { BtnComponent } from '../../../../shared/components/btn/btn.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [BtnComponent, RevealDirective],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.scss',
})
export class FinalCtaComponent {}
