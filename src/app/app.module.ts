import { NgModule } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
// import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { StudentsComponent } from './students/students.component';
import { NavBarComponent } from './navBar/navBar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [		
    AppComponent,
    StudentsComponent,
    
      NavBarComponent,
      FooterComponent,
      StudentDetailComponent,
      MessagesComponent,
      HomepageComponent
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
