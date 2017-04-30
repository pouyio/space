import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'spc-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  leaderboard;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getGlobalLeaderboard().subscribe(res => this.leaderboard = res);
  }

}
