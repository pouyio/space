import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'spc-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private api: ApiService) { }

  challenges: Array<any>;
  ngOnInit() {
    this.api.getChallenges().subscribe(res => {
      this.challenges = res.json();
    })
  }

}
