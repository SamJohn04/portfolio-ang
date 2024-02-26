import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ContactComponent } from '../components/contact/contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
