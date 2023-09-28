import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { HomeComponent } from './views/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LogInComponent } from './components/log-in/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    HomeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
