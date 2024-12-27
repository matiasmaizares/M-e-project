import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrl: './card-profile.component.css',
})
export class CardProfileComponent {
  @Input() profile!: Profile;

  constructor(private router: Router) {}

  goToProfile(id: number): void {
    this.router.navigate([`/profile`, id]);
  }
}
