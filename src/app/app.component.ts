import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeTab: string;

  constructor(private router: Router) {
    router.events.subscribe((val:NavigationStart) => {
      this.activeTab = val.url.split('/')[1];
    });
  }
  ngOnInit() {
    this.activeTab = 'challenges';
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
