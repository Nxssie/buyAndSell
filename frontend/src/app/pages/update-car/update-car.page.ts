import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.page.html',
  styleUrls: ['./update-car.page.scss'],
})
export class UpdateCarPage implements OnInit {

  updateCarForm: FormGroup;
  currentUserId: number;

  constructor(public fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private carService: CarService) {
                this.updateCarForm = this.fb.group({
                  brand: [''],
                  model: [''],
                  kms: [''],
                  year: ['']
                })
               }

  ngOnInit() {
    let currentCarId = this.carService.getCurrentCarId();
    this.carService.getOne(currentCarId).subscribe((car) => {
      this.updateCarForm.setValue({
        brand: car['brand'],
        model: car['model'],
        kms: car['kms'],
        year: car['year']
      })
    })
    this.currentUserId = this.userService.getCurrentUserId(); 
  }

  ionViewWillEnter() {
    console.log(this.userService.getCurrentUserId());
  }

  onFormSubmit() {
    if(!this.updateCarForm.valid) {
      return false;
    } else {
      let car = {
        id: null,
        brand: this.updateCarForm.value.brand,
        model: this.updateCarForm.value.model,
        kms: this.updateCarForm.value.kms,
        year: this.updateCarForm.value.year
      }
      this.carService.updateCar(car, this.currentUserId).subscribe((c) => {
        this.carService.getAll();
        this.router.navigateByUrl("/posts");
      })
    }
  }

}
