import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { services } from '../data/services';
import { CurrencyPipe } from '@angular/common';
import { events } from '../data/events';
import { blog } from '../data/blog';
import { BlogModalComponent } from '../blog-modal/blog-modal.component';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe, BlogModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  servicesList = signal(services);
  eventsList = signal(events);
  blogList = signal(blog);
  modal = signal(false);
  idClicked = signal(0);

  constructor(private cdr: ChangeDetectorRef) {}

  toggleModal(id: number, flag: boolean = false) {
    this.modal.set(flag);
    this.idClicked.set(id);
    console.log(id)
    this.cdr.detectChanges();
    if (!flag) this.toggleModal(id, true);
  }
}
