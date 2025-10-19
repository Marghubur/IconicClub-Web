import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { EventsComponent } from "../events/events.component";
import { MissionComponent } from "../mission/mission.component";
import { PartnerWithUsComponent } from "../partner-with-us/partner-with-us.component";
import { RouterLink } from '@angular/router';
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutUsComponent, EventsComponent, MissionComponent, PartnerWithUsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  slides = [
    {
      id: 0,
      title: 'First Slide',
      description: 'This is the first slide description.',
      image: 'assets/hero_bg.jpeg'
    },
    {
      id: 1,
      title: 'Second Slide',
      description: 'This is the second slide description.',
      image: 'assets/hero_bg-1.jpeg'
    },
    {
      id: 2,
      title: 'Second Slide',
      description: 'This is the second slide description.',
      image: 'assets/hero_bg_2.jpeg'
    },
    
  ];

  ngAfterViewInit() {
    const carouselElement = document.querySelector('#carouselDynamic');
    new bootstrap.Carousel(carouselElement, {
      interval: 3000, // Autoplay interval in ms
      ride: 'carousel', // Start cycling automatically
      pause: 'hover',   // Pause on hover (optional)
      wrap: true        // Loop back to start
    });
  }
}
