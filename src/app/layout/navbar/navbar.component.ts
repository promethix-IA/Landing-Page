import { Component, HostListener } from '@angular/core';
import { BRAND_NAME, NAV_ITEMS } from '../../core/constants/landing.constants';
import { BtnComponent } from '../../shared/components/btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly brand = BRAND_NAME;
  readonly items = NAV_ITEMS;
  menuOpen = false;
  scrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
