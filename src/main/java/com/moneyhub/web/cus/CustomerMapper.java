package com.moneyhub.web.cus;

import org.springframework.stereotype.Repository;


@Repository
public interface CustomerMapper {
	
	public void join(Customer param);
	public Customer login(Customer param);
	public int existId(String id);
}
