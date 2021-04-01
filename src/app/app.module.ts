import { NgModule } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
// import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { StudentsComponent } from './students/students.component';
import { NavBarComponent } from './navBar/navBar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [		
    AppComponent,
    StudentsComponent,
    
      NavBarComponent,
      FooterComponent
   ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
