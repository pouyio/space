import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'spc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  challenges: Array<any>;
  season: string;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getChallenges().subscribe(res => {
      this.challenges = res.json()
      this.season = this.challenges[0].season;
    });
  }

}
