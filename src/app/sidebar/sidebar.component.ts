import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  // constructor(public router: Router) {}

  // isRouteActive(route: string): boolean {
  //   return this.router.url === route;
  // }
  visible: boolean = false;

  toggleSidebar() {
    this.visible = !this.visible;
  }
}
