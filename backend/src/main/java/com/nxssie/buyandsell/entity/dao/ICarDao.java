package com.nxssie.buyandsell.entity.dao;

import com.nxssie.buyandsell.entity.models.Car;
import com.nxssie.buyandsell.entity.models.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ICarDao extends CrudRepository<Car, Long> {
    List<Car> findByUserId(Long id);
}
