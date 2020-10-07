package com.nxssie.buyandsell.entity.services;

import com.nxssie.buyandsell.entity.models.Car;
import com.nxssie.buyandsell.entity.models.User;
import org.springframework.data.domain.Sort;

import java.util.List;

public interface ICarService {
    List<Car> getAll();

    void addCar(Car car);

    void deleteCar(long id);

    void updateCar(long id, Car car);

    Car findById(long id);

    List<Car> findByUserId(Long id);
}
