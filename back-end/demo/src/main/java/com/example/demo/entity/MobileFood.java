package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MobileFood {

    private int locationid;

    private String applicant;

    private String facilityType;

    private String foodItems;

    private String dayshours;

    private int cnn;

    private String locationDescription;

    private String address;

    private String blocklot;

    private String permit;

    private String status;

    private Double longitude;

    private Double latitude;

}
