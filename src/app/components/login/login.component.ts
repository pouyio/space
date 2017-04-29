import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'spc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  activeTab: string;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) {
     this.createForm();
     this.activeTab = 'loginTab';
  }

  createForm() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required ],
      password: ['', [Validators.required, Validators.minLength(4)] ]
    });
  }

  setTab(tab: string) {
    this.activeTab = tab;
  }

  onSubmit() {
    if(this.activeTab === 'loginTab'){
      this.api.login(this.loginForm.value).subscribe(res => {
        if(res) this.router.navigate(['/challenges']);
      });
    }else {
      this.api.createUser(this.loginForm.value).subscribe(res => {
          if(res) this.router.navigate(['/challenges']);
      });
    }
  }

}
