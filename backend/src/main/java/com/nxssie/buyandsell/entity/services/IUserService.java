package com.nxssie.buyandsell.entity.services;

import com.nxssie.buyandsell.entity.models.User;

import java.util.List;

public interface IUserService {
    List<User> getAll();

    void addUser(User user);

    void deleteUser(long id);

    void updateUser(long id, User car);

    User findById(long id);

    User findByUsername(String username);
}
