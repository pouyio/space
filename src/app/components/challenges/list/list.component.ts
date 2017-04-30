import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'spc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  season;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCurrentChallenges().subscribe(res => this.season = res[0]);
  }

}
