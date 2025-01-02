import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ContactComponent } from './views/contact/contact.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ProfileListComponent } from './views/profile-list/profile-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CardProfileComponent } from './shared/card-profile/card-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './shared/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProfileComponent,
    ProfileListComponent,
    NavbarComponent,
    CardProfileComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
