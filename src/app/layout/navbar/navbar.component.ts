import { Component, HostListener } from '@angular/core';
import { BRAND_NAME, DEMO_MAILTO, NAV_ITEMS, POS_URL } from '../../core/constants/landing.constants';
import { BtnComponent } from '../../shared/components/btn/btn.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, LogoComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly brand = BRAND_NAME;
  readonly items = NAV_ITEMS;
  readonly demoMailto = DEMO_MAILTO;
  readonly posUrl = POS_URL;
  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 1180) this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
