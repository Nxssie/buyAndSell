import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loginForm: FormGroup;

  constructor(public fb: FormBuilder, 
    private userService: UserService,
    private router: Router) { 
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(){}
  
  onFormSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      let user = {
        id: null,
        brand: this.loginForm.value.brand,
        model: this.loginForm.value.model
      }
      
      this.userService.

    }
  }

}
