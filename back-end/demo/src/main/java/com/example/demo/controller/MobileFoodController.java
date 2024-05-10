package com.example.demo.controller;

import com.example.demo.common.Result;
import com.example.demo.entity.MobileFood;
import com.example.demo.service.Impl.MobileFoodServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mobileFood")
public class MobileFoodController {
    @Autowired
    private MobileFoodServiceImpl mobileFoodService;

    @RequestMapping("/list")
    public Result<List<MobileFood>> getMobileFoodList() {
        List<MobileFood> mobileFoodList = mobileFoodService.getMobileFoodList();
        return Result.success(mobileFoodList);
    }
}
