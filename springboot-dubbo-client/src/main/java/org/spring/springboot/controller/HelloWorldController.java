package org.spring.springboot.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.spring.springboot.dubbo.CityDubboConsumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Spring Boot HelloWorld 案例
 *
 * Created by bysocket on 16/4/26.
 */
@RestController
public class HelloWorldController {
	
	
	@Autowired
	public CityDubboConsumerService cityService ;
	
	private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);

    @RequestMapping("/")
    public String sayHello() {
    	logger.info("invoke HelloWorldController # sayHello");
    	cityService.printCity();
    	logger.info(":::cityService.printCity() has been invoked");
        return "Hello,World!";
    }
    
    @RequestMapping("/hi")
    public String sayHi() {
    	logger.info("invoke HelloWorldController # sayHi");
        return "Hi,World!";
    }
}
