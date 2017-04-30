import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'spc-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {

  participation: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.reloadValoration();
  }

  value(quant: number) {
    this.api.postValoration({
      participation: this.participation.participation,
      valoration: quant
     }).subscribe(res => this.reloadValoration());
  }

  reloadValoration() {
    this.api.getRandomParticipation().subscribe((res => this.participation = res));
  }

}
