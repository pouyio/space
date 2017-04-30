import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'spc-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  seasons: Array<any>;
  currentSeason: any;

  constructor(private api: ApiService) { }

  challenges: Array<any>;
  ngOnInit() {
    this.api.getCurrentSeason().subscribe(res => this.currentSeason = res);
    this.api.getAllChallenges().subscribe(res => this.seasons = res );
  }

}
