import { NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { events } from '../data/events';

@Component({
  selector: 'app-events-modal',
  imports: [NgIf],
  templateUrl: './events-modal.component.html',
  styleUrl: './events-modal.component.scss'
})
export class EventsModalComponent {
  @Input() showEvent: boolean = false;
  @Input() idEvent: number = 0;
  event = signal(events);
}
