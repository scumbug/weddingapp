import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Eve & CS Wedding';

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
      },
      {
        label: 'Find Table',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Stream',
      },
    ];
  }
}
