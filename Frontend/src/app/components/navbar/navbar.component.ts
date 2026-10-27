import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavbarConfig {
  url: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  navbarConfig: NavbarConfig[] = [];

  catalogConfig: NavbarConfig[] = [
    { url: '/movies', label: 'Películas', icon: 'film' },
    { url: '/categories', label: 'Categorías', icon: 'tags' },
  ]

  constructor(){
    this.setNavbarConfig();
  }

  setNavbarConfig(){
    this.navbarConfig = this.catalogConfig;
  }

}
