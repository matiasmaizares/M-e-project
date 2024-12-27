import { Component } from '@angular/core';
import { Profile } from '../../models/profile';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrl: './profile-list.component.css',
})
export class ProfileListComponent {
  level!: string;
  profiles: Profile[] = [];

  constructor(
    private route: ActivatedRoute,
    private profilesService: ProfileService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.level = params['level'];
      console.log(this.level);
      this.profiles = this.profilesService.getProfilesList(this.level);
    });
  }
}
