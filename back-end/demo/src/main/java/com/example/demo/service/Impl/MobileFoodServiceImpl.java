package com.example.demo.service.Impl;

import com.example.demo.entity.MobileFood;
import com.example.demo.mapper.MobileFoodMapper;
import com.example.demo.service.IMobileFoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MobileFoodServiceImpl implements IMobileFoodService {

    @Autowired
    private MobileFoodMapper mobileFoodMapper;

    @Override
    public List<MobileFood> getMobileFoodList() {
        return mobileFoodMapper.getlist();
    }
}
