import { NgIf } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { blog } from '../data/blog';

@Component({
  selector: 'app-blog-modal',
  imports: [NgIf],
  templateUrl: './blog-modal.component.html',
  styleUrl: './blog-modal.component.scss'
})
export class BlogModalComponent {
  @Input() showModal: boolean = false;
  @Input() idBlog: number = 0;
  blog = signal(blog);
}
