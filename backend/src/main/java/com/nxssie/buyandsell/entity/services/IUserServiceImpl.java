package com.nxssie.buyandsell.entity.services;

import com.nxssie.buyandsell.entity.dao.IUserDao;
import com.nxssie.buyandsell.entity.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IUserServiceImpl implements IUserService {

    @Autowired
    IUserDao userDao;

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
    public User findByUsername(String username) {
        User u = new User();
        List<User> listUser = (List<User>) userDao.findAll();
        for (User u1 : listUser) {
            if (u1.getUsername().equals(username)) {
                u = u1;
                return u;
            }
        }
        return u;
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
