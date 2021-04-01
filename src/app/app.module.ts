import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
