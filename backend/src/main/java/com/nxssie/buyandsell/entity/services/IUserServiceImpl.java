package com.nxssie.buyandsell.entity.services;

import com.nxssie.buyandsell.entity.dao.ICarDao;
import com.nxssie.buyandsell.entity.dao.IUserDao;
import com.nxssie.buyandsell.entity.models.Car;
import com.nxssie.buyandsell.entity.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;

public class IUserServiceImpl implements IUserService {

    @Autowired
    IUserDao userDao;
    ICarDao carDao;

    @Override
    public List<User> getAll() {
        return (List<User>) userDao.findAll();
    }

    @Override
    public User findById(long id) {
        Optional<User> u = userDao.findById(id);

        return u.orElse(null);
    }

    @Override
    public void addUser(User user) {
        userDao.save(user);
    }

    @Override
    public void deleteUser(long id) {
        userDao.deleteById(id);
    }

    @Override
    public void updateUser(long id, User user) {
        Optional <User> u = userDao.findById(id);

        if (u.isPresent()) {
            user.setId(id);
            userDao.save(user);
        }
    }
}
