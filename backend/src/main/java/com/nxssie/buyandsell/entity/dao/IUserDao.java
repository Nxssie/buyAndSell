package com.nxssie.buyandsell.entity.dao;

import com.nxssie.buyandsell.entity.models.User;
import org.springframework.data.repository.CrudRepository;

public interface IUserDao extends CrudRepository<User, Long> {
}
