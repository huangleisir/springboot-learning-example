package org.springboot.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.spring.springboot.controller.HelloWorldController;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.TestComponent;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
@RunWith(SpringJUnit4ClassRunner.class)  
//这是Spring Boot注解，为了进行集成测试，需要通过这个注解加载和配置Spring应用上下  
//@SpringBootConfiguration(classes = SpringBootApplication.class)  
@WebAppConfiguration  
public class TestController {
	
	@Test
	public void test(){
	new HelloWorldController().sayHi();
	}
	
	
	@Test
	public void testSayHello(){
	new HelloWorldController().sayHello();
	}

}
