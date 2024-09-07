import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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
