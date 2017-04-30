import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'spc-gather',
  templateUrl: './gather.component.html',
  styleUrls: ['./gather.component.css']
})
export class GatherComponent implements OnInit {

  file: File;
  challenge: number;
  @ViewChild('fileInput') fileInput:ElementRef;

  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.fileInput.nativeElement.click();
    this.route.params.subscribe(params => {
       this.challenge = +params['id'];
    });
  }

  mediaCaptured(e) {
    this.api.uploadFile(e.target.files[0], this.challenge).subscribe(res => res.json());
  }

}
