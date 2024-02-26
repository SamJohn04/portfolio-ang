import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills = [{
    name: 'HTML',
    skill: 3
  }, {
    name: 'CSS',
    skill: 4
  }, {
    name: 'JavaScript',
    skill: 4
  }, {
    name: 'Python',
    skill: 4
  }, {
    name: 'C',
    skill: 3
  }]
}
