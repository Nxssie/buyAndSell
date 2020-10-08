package com.nxssie.buyandsell.controllers;

import com.nxssie.buyandsell.entity.models.User;
import com.nxssie.buyandsell.entity.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class UserController {
    @Autowired
    IUserService iUserService;
    //End-points

    @GetMapping("/api/buyandsell/users")
    private List<User> getAll() {
        return iUserService.getAll();
    }

    @GetMapping("/api/buyandsell/users/{id}")
    private User findById(@PathVariable(value = "id") long id){
        return iUserService.findById(id);
    }

    @PostMapping("/api/buyandsell/users")
    private void addUser(User user) {
        iUserService.addUser(user);
    }

    @DeleteMapping("/api/buyandsell/users/{id}")
    private void deleteUser(@PathVariable(value = "id") long id) {
        iUserService.deleteUser(id);
    }

    @PutMapping("/api/buyandsell/users/{id}")
    private void updateUser(@PathVariable(value = "id") long id, User user) {
        iUserService.updateUser(id, user);
    }

    @GetMapping("/api/buyandsell/users/user/{username}")
    private User findByUsername(@PathVariable(value = "username") String username) {
        return iUserService.findByUsername(username);
    }

}
