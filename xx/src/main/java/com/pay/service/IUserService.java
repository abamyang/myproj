package com.pay.service;

import java.util.List;
import java.util.Map;

import com.pay.pojo.User;


public interface IUserService extends ICommonService<User>  {
	public User getUserById(int userId);
	
	public User selectByUserName(String userName);
	
	/**获得下级用户的数量**/
	int getOwnerUserCount(Map<String, Object> map);
	
	/**获得下级用户的列表**/
	List<User> getOwnerUserList(Map<String, Object> map,int currentPage);
	
	
	
}
