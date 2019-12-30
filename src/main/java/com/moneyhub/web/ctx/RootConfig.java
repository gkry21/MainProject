package com.moneyhub.web.ctx;

import org.mybatis.spring.annotation.MapperScan;
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
@Configuration
@MapperScan(basePackages = {"com.moneyhub.web"})
@ComponentScan(basePackages = { "com.moneyhub.web" })
//파일 인식 못할때 사용
/*@Import({
	MyBatisConfig.class, ServletConfig.class
})*/

public class RootConfig {
	@Bean
	public DataSource dataSource() {
		HikariConfig hikariConfig = new HikariConfig();
	//	hikariConfig.setDriverClassName("org.mariadb.jdbc.Driver");
	//	hikariConfig.setJdbcUrl("jdbc:mariadb://172.168.0.199/moneyhub?serverTimezone=UTC");	//내꺼
	//	hikariConfig.setJdbcUrl("jdbc:mariadb://172.168.0.235/moneyhubdb?serverTimezone=UTC");	//은지씨
		hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver");							//myhome
		hikariConfig.setJdbcUrl("jdbc:mysql://localhost:3306/moneyhub?serverTimezone=UTC"); //myhome
		hikariConfig.setUsername("moneyhub");
		hikariConfig.setPassword("moneyhub");	
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);
		return dataSource;
	}
}
