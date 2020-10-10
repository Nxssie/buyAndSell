import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  addCarForm: FormGroup;
  currentUserId: number;

  constructor(public fb: FormBuilder,
              private router: Router,
              private userService: UserService,
              private carService: CarService) {
                this.addCarForm = this.fb.group({
                  brand: [''],
                  model: [''],
                  kms: [''],
                  year: ['']
                })
               }

  ngOnInit() {
    this.currentUserId = this.userService.getCurrentUserId(); 
  }

  ionViewWillEnter() {
    console.log(this.userService.getCurrentUserId());
  }

  onFormSubmit() {
    if(!this.addCarForm.valid) {
      return false;
    } else {
      let car = {
        id: null,
        brand: this.addCarForm.value.brand,
        model: this.addCarForm.value.model,
        kms: this.addCarForm.value.kms,
        year: this.addCarForm.value.year
      }
      this.carService.addCar(car, this.currentUserId).subscribe((c) => {
        this.carService.getAll();
        this.router.navigateByUrl("/posts");
      })
    }
  }

}
