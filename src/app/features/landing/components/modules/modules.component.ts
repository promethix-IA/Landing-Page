import { Component } from '@angular/core';
import { MODULES } from '../../../../core/constants/landing.constants';
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
}
