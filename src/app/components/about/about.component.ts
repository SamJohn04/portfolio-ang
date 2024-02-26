import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
