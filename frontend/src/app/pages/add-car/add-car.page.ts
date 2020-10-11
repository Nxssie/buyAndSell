import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { CarService } from 'src/app/services/car.service';
import { Validators } from "@angular/forms";

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
                  brand: ['', [Validators.required, Validators.minLength(3)]],
                  model: ['', [Validators.required, Validators.minLength(2)]],
                  kms: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
                  year: ['', [Validators.required, Validators.pattern('^(20[0-2][0-9]|19[0-9][0-9])$')]]
                })
               }

  ngOnInit() {
    this.currentUserId = this.userService.getCurrentUserId(); 
  }

  ionViewWillEnter() {
    console.log(this.userService.getCurrentUserId());
  }

  get errorControl() {
    return this.addCarForm.controls;
  }

  onFormSubmit() {
    if(!this.addCarForm.valid) {
      console.log('Please provide all the required values!')
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
