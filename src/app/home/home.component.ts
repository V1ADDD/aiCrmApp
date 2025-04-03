import { Component, signal } from '@angular/core';
import { services } from '../data/services';
import { CurrencyPipe } from '@angular/common';
import { events } from '../data/events';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  servicesList = signal(services);
  eventsList = signal(events);
}
