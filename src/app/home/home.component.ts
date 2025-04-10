import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { services } from '../data/services';
import { CurrencyPipe } from '@angular/common';
import { events } from '../data/events';
import { blog } from '../data/blog';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';
import { clients } from '../data/clients';
import { ServiceBookingComponent } from '../service-booking/service-booking.component';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, BlogModalComponent, ServiceBookingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  servicesList = signal(services);
  eventsList = signal(events);
  blogList = signal(blog);
  clientsList = signal(clients);
  modal = signal(false);
  booking = signal(false);
  idClicked = signal(0);
  serviceClicked = signal(0);

  constructor(private cdr: ChangeDetectorRef) {}

  toggleModal(id: number, flag: boolean = false) {
    this.modal.set(flag);
    this.idClicked.set(id);
    this.cdr.detectChanges();
    if (!flag) this.toggleModal(id, true);
  }

  toggleBooking(id: number, flag: boolean = false) {
    this.booking.set(flag);
    this.serviceClicked.set(id);
    this.cdr.detectChanges();
    if (!flag) this.toggleBooking(id, true);
  }
}
