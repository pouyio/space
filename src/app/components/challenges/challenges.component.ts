import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spc-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

  activeTab: string;

  constructor() { }

  ngOnInit() {
    this.activeTab = 'challenges';
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

}
