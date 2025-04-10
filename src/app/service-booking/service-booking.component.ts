import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { services } from '../data/services';

@Component({
  selector: 'app-service-booking',
  imports: [NgIf, CurrencyPipe],
  templateUrl: './service-booking.component.html',
  styleUrl: './service-booking.component.scss'
})
export class ServiceBookingComponent {
  @Input() showBooking: boolean = false;
  @Input() idService: number = 0;
  service = signal(services);
}
