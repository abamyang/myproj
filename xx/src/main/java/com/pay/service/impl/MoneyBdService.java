package com.pay.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.pay.base.constant.CommonConstant;
import com.pay.dao.impl.MoneyBdDaoImpl;
import com.pay.pojo.MoneyBd;
import com.pay.service.IMoneyBdService;

@Service("moneyBdService")
public class MoneyBdService implements IMoneyBdService {

	
	@Resource
	private MoneyBdDaoImpl moneyBdDaoImpl;
	
	public int getMoneyBdCount(Map<String, Object> map) {

		return this.moneyBdDaoImpl.getObjectCountBySelecSqltId(map, "getMoneyBdCount");
	}

	public List<MoneyBd> getMoneyBdList(Map<String, Object> map, int currentPage) {
		return this.moneyBdDaoImpl.getObjectListBySelectSqlId(map, currentPage,CommonConstant.PAGE_SIZE_DEFAULT,"getMoneyBdList");
	}
	
	

}
