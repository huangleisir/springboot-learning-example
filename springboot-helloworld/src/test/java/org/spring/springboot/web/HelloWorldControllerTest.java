package org.spring.springboot.web;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.junit.Assert.assertEquals;

/**
 * Spring Boot HelloWorldController 测试 - {@link HelloWorldController}
 *
 * Created by bysocket on 16/4/26.
 */
public class HelloWorldControllerTest {
	private static final Logger logger = LoggerFactory.getLogger(HelloWorldController.class);

    @Test
    public void testSayHello() {
    	logger.info(new HelloWorldController().sayHello());
      //  assertEquals("Hello,World!",new HelloWorldController().sayHello());
    }
}
