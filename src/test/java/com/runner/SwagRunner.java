package com.runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
features="src/main/resources/features/swag.feature",//path of feature file
plugin = {"pretty","html:test-output","json:json_output/cucmber.json","junit:junit_xml/cucumber.xml","com.cucumber.listener.ExtentCucumberFormatter:output/report.html"},//reports generated
tags = {"@TS_01,@TS_02,@TS_03,@TS_04,@TS_05,@TS_06,@TS_07,@TS_08,@TS_09,@TS_10,@TS_11,@TS_12,@TS_13,@TS_14,@TS_15,@TS_16"},//Tags
glue = {"com/stepdefinition"},//path of stepdefinition file
monochrome=true,//display console output in readable format
strict=true,//checking if any step is not defined in stepdefinition file
dryRun=false// mapping between feature and stepdefinition file
)

public class SwagRunner {
	@AfterClass
	public static void setup()
	{
	Reporter.loadXMLConfig(new File("src/test/resources/extent-config.xml"));
	//Reporter.setSystemInfo("Test User", System.getProperty("user.name"));
	Reporter.setSystemInfo("User Name", "AJ");
	Reporter.setSystemInfo("Application Name", "Test App ");
	Reporter.setSystemInfo("Operating System Type", System.getProperty("os.name").toString());
	Reporter.setSystemInfo("Environment", "Production");
	Reporter.setTestRunnerOutput("Test Execution Cucumber Report");
	}

}
