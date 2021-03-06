package com.nxssie.buyandsell.entity.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cars")
public class Car implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String brand;

    @Column
    private String model;

    @Column
    private long kms;

    @Column
    private int year;
    
    @ManyToOne(optional = false,cascade = {CascadeType.REFRESH} ,fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Car(long id, String brand, String model, long kms, int year, User user) {
        super();

        setId(id);
        setBrand(brand);
        setModel(model);
        setKms(kms);
        setYear(year);
        setUser(user);
    }

    public Car() {

    }

    public long getId() {
        return id;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public long getKms() {
        return kms;
    }

    public int getYear() {
        return year;
    }

    public User getUser() {
        return user;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public void setKms(long kms) {
        this.kms = kms;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setUser(User user) {
        this.user = user;
    }

}
