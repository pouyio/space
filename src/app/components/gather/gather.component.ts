import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'spc-gather',
  templateUrl: './gather.component.html',
  styleUrls: ['./gather.component.css']
})
export class GatherComponent implements OnInit {

  file: File;
  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  imageCaptured(e) {

    var formData = new FormData();

    this.api.uploadFile('image', e.target.files[0]).subscribe(res => res.json());
  }

  videoCaptured(e) {
    console.log(e.target.files);
  }

}
