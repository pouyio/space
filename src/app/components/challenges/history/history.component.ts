import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'spc-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  seasons: Array<any>;
  currentSeason: any;
  detailExists: boolean = false;
  detailChallenge: any;

  constructor(private api: ApiService) { }

  challenges: Array<any>;
  ngOnInit() {
    Observable.forkJoin([this.api.getCurrentSeason(), this.api.getAllChallenges()]).subscribe(res => {
      this.currentSeason = res[0];
      this.seasons = res[1];
    });
  }

  detail(challenge) {
    this.detailChallenge = challenge;
    this.detailExists = true;
  }

}
