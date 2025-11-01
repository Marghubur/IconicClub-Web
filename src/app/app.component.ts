import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iconic-club';

  // Disable right-click
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
  }

  // Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+S etc.
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (
      event.key === 'F12' || // Developer tools
      (event.ctrlKey && event.shiftKey && event.key === 'I') || // DevTools
      (event.ctrlKey && event.shiftKey && event.key === 'J') || // Console
      (event.ctrlKey && event.key === 'U') || // View source
      (event.ctrlKey && event.key === 'S') // Save page
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
}
