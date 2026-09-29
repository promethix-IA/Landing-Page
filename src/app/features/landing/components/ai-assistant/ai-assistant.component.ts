import { Component } from '@angular/core';
import { AI_CHAT } from '../../../../core/constants/landing.constants';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.scss',
})
export class AiAssistantComponent {
  readonly messages = AI_CHAT;
}
