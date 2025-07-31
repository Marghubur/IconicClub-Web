import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutUsComponent } from "../about-us/about-us.component";
import { EventsComponent } from "../events/events.component";
import { MissionComponent } from "../mission/mission.component";
import { PartnerWithUsComponent } from "../partner-with-us/partner-with-us.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AboutUsComponent, EventsComponent, MissionComponent, PartnerWithUsComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
