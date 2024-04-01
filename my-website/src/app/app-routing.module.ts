import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillPrjComponent } from './skill-prj/skill-prj.component';
import { ExpEduComponent } from './exp-edu/exp-edu.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: SkillPrjComponent },
  { path: 'experience', component: ExpEduComponent },
  { path: 'contact', component: ContactMeComponent },
  // Add more routes as needed
  { path: '**', redirectTo: '' } // Redirect invalid routes to the home page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
