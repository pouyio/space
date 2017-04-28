import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeTab: string;

  ngOnInit() {
    this.activeTab = 'challenges';
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
