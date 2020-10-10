import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { UserService } from '../../services/user.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

  currentUserId: number;
  cars: Car[];

  constructor(private userService: UserService,
              private carService: CarService,
              private router: Router) { }

  ngOnInit() {
    this.currentUserId = this.userService.getCurrentUserId();
    if (this.currentUserId == null || this.currentUserId == 0) {
      this.router.navigateByUrl("/home");
    } else {
      this.showCurrentUserPosts(this.currentUserId);
    }
    
  }

  ionViewWillEnter() {
    console.log(this.userService.getCurrentUserId());
    this.currentUserId = this.userService.getCurrentUserId();
    if (this.currentUserId == null || this.currentUserId == 0) {
      this.router.navigateByUrl("/home");
    } else {
      this.showCurrentUserPosts(this.currentUserId);
    }
  }

  showCurrentUserPosts(currentUserId) {
    this.carService.getCarsByUserId(currentUserId).subscribe(cars => {
      this.cars = cars;
      console.log(cars);
    })
  }

  deleteCar(id: number) {
    console.log("trying");
    this.carService.deleteCar(id).subscribe( () => {
      this.showCurrentUserPosts(this.currentUserId);
    })
  }

  postACar(id: number) {
    this.router.navigateByUrl("/add-car");
  }

  updateCar(id: number) {
    this.carService.setCurrentCarId(id);
    this.router.navigateByUrl("update-car");
  }

}
