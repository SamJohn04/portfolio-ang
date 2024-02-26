import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = [{
    name: 'home',
    url: '#home'
  }, {
    name: 'about',
    url: '#about'
  }, {
  //   name: 'projects',
  //   url: '#projects'
  // }, {
    name: 'contact',
    url: '#contact'
  }]
}
