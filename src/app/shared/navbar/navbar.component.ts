import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  @HostListener('body:scroll', [])
  onScroll() {
    let element = document.querySelector('.sticky-top') as HTMLElement;
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
      element.classList.add('shadow');
    else
      element.classList.remove('shadow');
  }
}
