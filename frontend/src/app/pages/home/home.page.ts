import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: [""],
      password: [""],
    });
  }
  // On init we're interested on checking if the current user is already logged (future implements)
  ngOnInit() {
    this.checkIfUserIsAlreadyLogged();
  }

  /*Once we had initialize this app we could check again if the user is logged when him comeback here because 
  our homepage is just a login/register page  */
  ionViewWillEnter() {
    this.checkIfUserIsAlreadyLogged();
    this.loginForm.reset();
    console.log(this.userService.getCurrentUserId());
  }

  /*Obviously a checking. If this returns null means that the user is not currently identified and can
continue to the homepage in case of returning the user id he is redirected to posts page*/
  checkIfUserIsAlreadyLogged() {
    let currentUserId = this.userService.getCurrentUserId();
    if (currentUserId == null) {
      this.router.navigateByUrl("/home");
    } else {
      this.router.navigateByUrl("/posts");
    }
  }

  registerUser() {
    this.router.navigateByUrl("/register");
  }
  onFormSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      let user = {
        id: null,
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };

      let compareUser = this.userService.getUserByUsername(user.username).subscribe((res) => {
          if (compareUser == null) {
            console.log("User not found");
            return null;
          } else {
            if(user.password == res.password) {
              this.userService.setCurrentUserId(res.id);
              this.router.navigateByUrl("/posts");
            } else {
              console.log("Incorrect password");
              return null;
            }
          }
        });
      }
  }
}
