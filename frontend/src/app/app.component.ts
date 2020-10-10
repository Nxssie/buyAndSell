import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuController: MenuController,
    private userService: UserService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goHome() {
    this.menuController.close();
    this.router.navigateByUrl("/home");
  }

  seePosts() {
    this.menuController.close();
    this.router.navigateByUrl("/posts");
  }

  sellCar() {
    this.menuController.close();
    this.router.navigateByUrl("/add-car");
  }

  goProfile() {
    this.menuController.close();
    this.router.navigateByUrl("/profile");
  }

  goProfilePosts() {
    this.menuController.close();
    this.router.navigateByUrl("/my-posts")
  }

  checkIfUserIsAlreadyLogged(): boolean {
    let currentUserId = this.userService.getCurrentUserId;
    if(currentUserId == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.menuController.close();
    let userLogged = this.checkIfUserIsAlreadyLogged();
    if(userLogged == true) {
      this.userService.setCurrentUserId(null);
      this.router.navigateByUrl("/home");
    }
  }
}
