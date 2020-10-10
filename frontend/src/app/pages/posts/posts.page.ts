import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from '../../models/car'
import { CarService } from '../../services/car.service'
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  cars: Car[];

  constructor(private carService: CarService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.getAllPosts();
  }

  ionViewWillEnter() {
    this.getAllPosts();
    console.log(this.userService.getCurrentUserId());
  }

  getAllPosts() {
    this.carService.getAll().subscribe( cars => {
      this.cars = cars;
      console.log(this.cars);
    })
  }

  postACar() {
    this.router.navigateByUrl("/add-car");
  }

}
