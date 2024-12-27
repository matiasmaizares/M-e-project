import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;
  constructor(private router: Router) {}
  isModalVisible: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openModal() {
    console.log('click');
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
