package org.spring.springboot.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * Spring Boot HelloWorld 案例
 *
 * Created by bysocket on 16/4/26.
 */
@RestController
public class HelloWorldController {
	
	private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);

    @RequestMapping("/")
    public String sayHello() {
    	logger.info("invoke HelloWorldController # sayHello");
        return "Hello,World!";
    }
    
    @RequestMapping("/hi")
    public String sayHi() {
    	logger.info("invoke HelloWorldController # sayHi");
        return "Hi,World!";
    }
}
