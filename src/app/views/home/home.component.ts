import { Component } from '@angular/core';
import { Profiles } from '../../models/profiles';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Profiles | null = null;

  constructor(private router: Router, private profileService: ProfileService) {}
  ngOnInit(): void {
    this.products = this.profileService.getProfiles();
  }

  navigateToLevel(level: string): void {
    this.router.navigate(['/profile-list', level]);
  }
}
