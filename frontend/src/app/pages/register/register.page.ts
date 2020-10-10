import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(public fb: FormBuilder,
              private router: Router,
              private userService: UserService) {
                this.registerForm = this.fb.group({
                  email: [''],
                  username: [''],
                  password: ['']
                })
               }

  ngOnInit() {
  }

  onFormSubmit() {
    if(!this.registerForm.valid) {
      return false;
    } else {
      let user = {
        id: null,
        email: this.registerForm.value.email,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }
      this.userService.addUser(user).subscribe(() => {
        console.log("User registered and automatically logged in.")
        this.userService.setCurrentUserId(user.id);
        this.router.navigateByUrl("/posts");
      })
    }
  }

}
