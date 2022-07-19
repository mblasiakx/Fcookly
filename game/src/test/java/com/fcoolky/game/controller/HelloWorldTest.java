package com.fcoolky.game.controller;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

/**
 * First test to check if newly generated project works
 * @author Grzegorz Nowak
 * @since 12th Jul, 2021
 */
public class HelloWorldTest {
    @Test
    public void HelloWorldTest() {
        HelloWorld hw = new HelloWorld();
        Assertions.assertNotNull(hw.sayHello(), "message retrieved");
        Assertions.assertEquals("Hello", hw.sayHello(), "message is correct");
    }
}