import { Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profileId!: number;
  profile!: Profile;

  constructor(
    private route: ActivatedRoute,
    private profilesService: ProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.profileId = +params['id'];

      this.profile = this.profilesService.getProfile(this.profileId);

      if (!this.profile) {
        throw new Error('Perfil no encontrado.');
      }

      console.log('Perfil:', this.profile);
    });
  }
}
