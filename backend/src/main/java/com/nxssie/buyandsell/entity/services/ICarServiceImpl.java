package com.nxssie.buyandsell.entity.services;

import com.nxssie.buyandsell.entity.dao.ICarDao;
import com.nxssie.buyandsell.entity.models.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ICarServiceImpl implements ICarService {
    @Autowired
    ICarDao iCarDao;

    @Override
    public List<Car> getAll() {
        return (List<Car>) iCarDao.findAll();
    }

    @Override
    public Car findById(long id) {
        Optional<Car> c = iCarDao.findById(id);

        return c.orElse(null);
    }

    @Override
    public List<Car> findByUserId(Long id) {
        return iCarDao.findByUserId(id);
    }

    @Override
    public void addCar(Car car) {
        iCarDao.save(car);
    }

    @Override
    public void deleteCar(long id) {
        iCarDao.deleteById(id);
    }

    @Override
    public void updateCar(long id, Car car) {
        Optional <Car> c = iCarDao.findById(id);

        if (c.isPresent()) {
            car.setId(id);
            iCarDao.save(car);
        }
    }
}
