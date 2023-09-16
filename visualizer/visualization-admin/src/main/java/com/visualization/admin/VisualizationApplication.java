/**
 *
 */
package com.visualization.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author jiangwen
 *
 */

@EnableSwagger2
@SpringBootApplication
@ComponentScan({"com.visualization.*"})
public class VisualizationApplication {

    /**
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        SpringApplication.run(VisualizationApplication.class, args);
    }

}
