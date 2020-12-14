import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { TraningComponent } from './traning/traning.component';
import { CurrentTrainingComponent } from './traning/current-training/current-training.component';
import { NewTrainingComponent } from './traning/new-training/new-training.component';
import { PastTrainingsComponent } from './traning/past-trainings/past-trainings.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { Authservice } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    TraningComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    WelcomeComponent,
    LoginComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [ Authservice ],
  bootstrap: [AppComponent]
})
export class AppModule { }
