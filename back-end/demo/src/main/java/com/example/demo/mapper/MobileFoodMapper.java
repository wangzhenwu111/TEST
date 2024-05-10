package com.example.demo.mapper;

import com.example.demo.entity.MobileFood;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MobileFoodMapper {

   @Select("select * from Mobile_Food_Facility_Permit")
   List<MobileFood> getlist();
}
