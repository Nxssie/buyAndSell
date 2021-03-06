package com.nxssie.buyandsell.controllers;

import com.nxssie.buyandsell.entity.models.Car;
import com.nxssie.buyandsell.entity.services.ICarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class CarController {
    @Autowired
    ICarService iCarService;
    //End-points

    @GetMapping("/api/buyandsell")
    private List<Car> getAll() {
        return iCarService.getAll();
    }

    @GetMapping("/api/buyandsell/{id}")
    private Car findById(@PathVariable(value = "id") long id){
        return iCarService.findById(id);
    }

    @GetMapping("/api/buyandsell/cars/{id}")
    private List<Car> findByUserid(@PathVariable(value = "id") long id) {
        return iCarService.findByUserId(id);
    }

    @PostMapping("/api/buyandsell/{userId}")
    private void addCar(@PathVariable(value = "userId") long userId, Car car) {
        iCarService.addCar(car, userId);
    }

    @DeleteMapping("/api/buyandsell/{id}")
    private void deleteCar(@PathVariable(value = "id") long id) {
        iCarService.deleteCar(id);
    }

    @PutMapping("/api/buyandsell/{id}")
    private void updateCar(@PathVariable(value = "id") long id, Car car) {
        iCarService.updateCar(id, car);
    }
}
