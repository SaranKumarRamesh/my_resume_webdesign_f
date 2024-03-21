import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillPrjComponent } from './skill-prj/skill-prj.component';
import { ExpEduComponent } from './exp-edu/exp-edu.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillPrjComponent,
    ExpEduComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
