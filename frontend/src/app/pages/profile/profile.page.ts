import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  currentUserId: number;
  user: User;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getCurrentUser();
    this.checkIfUserIsAlreadyLogged();
  }

  checkIfUserIsAlreadyLogged() {
    if (this.currentUserId == null) {
      this.router.navigateByUrl("/home");
    } else {
      this.router.navigateByUrl("/profile");
    }
  }

  ionViewWillEnter() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUserId = this.userService.getCurrentUserId();
    this.userService.getOne(this.currentUserId).subscribe((user) => {
      this.user = user;
    })
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.userService.setCurrentUserId(null);
    })
  }

}
