import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  @ViewChild('nav', { static: false }) navRef!: ElementRef;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isMenuOpen && this.navRef && !this.navRef.nativeElement.contains(event.target)) {
      const burger = (event.target as HTMLElement).closest('.burger');
      if (!burger) {
        this.closeMenu();
      }
    }
  }
}
