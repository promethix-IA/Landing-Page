import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { TrustBarComponent } from './components/trust-bar/trust-bar.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ModulesComponent } from './components/modules/modules.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { AiFeaturesComponent } from './components/ai-features/ai-features.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { PosExperienceComponent } from './components/pos-experience/pos-experience.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { SecurityComponent } from './components/security/security.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    TrustBarComponent,
    ProblemComponent,
    ModulesComponent,
    AiAssistantComponent,
    AiFeaturesComponent,
    HowItWorksComponent,
    IntegrationsComponent,
    PosExperienceComponent,
    BenefitsComponent,
    SecurityComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    FinalCtaComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
