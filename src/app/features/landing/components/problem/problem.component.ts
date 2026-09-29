import { Component } from '@angular/core';
import { PROBLEM_ITEMS } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.scss',
})
export class ProblemComponent {
  readonly items = PROBLEM_ITEMS;
}
