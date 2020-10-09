import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car'
import { CarService } from '../../services/car.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  ionViewWillEnter() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.carService.getAll().subscribe( cars => {
      this.cars = cars;
      console.log(this.cars);
    })
  }

}
