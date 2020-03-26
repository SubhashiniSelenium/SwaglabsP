package com.stepdefinition;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {
WebDriver driver;
	
   //To launch the browser
	@Given("^the user launched the chrome browser$")
	public void the_user_launched_the_chrome_browser() {
	String browser = "chrome";
		if(browser.equalsIgnoreCase("chrome"))
		{
	 System.setProperty("webdriver.chrome.driver", "Drivers\\chromedriver.exe");
	 driver=new ChromeDriver();
	 driver.manage().window().maximize();//To maximize the window
	}
		else if(browser.equalsIgnoreCase("firefox"))//To launch firefox browser
		{
	  System.setProperty("webdriver.gecko.driver", "Drivers\\geckodriver.exe");
	  driver=new firefoxDriver();
	  driver.manage().window().maximize();//To maximize the window
		}
		}
	//To launch the Swaglabs application
	@When("^the user opens Swaglabs homepage$")
	public void the_user_opens_Swaglabs_homepage() {
	driver.get("https://www.saucedemo.com/");
	}
	//To enter the valid credentials
	@When("^the user enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_enters_valid_username_and_password(String username,String password) {
	driver.findElement(By.id("user-name")).sendKeys(username);
	driver.findElement(By.id("password")).sendKeys(password);
	}
    //To enter login button
	@When("^click the login button$")
	public void click_the_login_button() throws IOException {
	driver.findElement(By.xpath("//input[@value='LOGIN']")).click();
	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(scrFile, new File("Screenshots\\validlogin.jpg"));        
	}
    //using assert if the product label is displayed or not
	@Then("^Assert if the product_label is displayed$")
	public void assert_if_the_product_label_is_displayed() throws IOException {
	String actual =	driver.findElement(By.xpath("//div[text()='Products']")).getText();
	Assert.assertEquals("Products", actual);	
	System.out.println(" Actual and expected are same");
	driver.close();
	}
	
   //To launch the chrome browser
	@Given("^user launched the chrome browser$")
	public void user_launched_the_chrome_browser1() {
	the_user_launched_the_chrome_browser();
	}	
   //To open swaglabs homepage
	@When("^user opens swaglabs homepage$")
	public void user_opens_swaglabs_homepage() {
	driver.get("https://www.saucedemo.com/index.html");
	}	
    //To enter invalid username and password
	@When("^user enters invalid  \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_invalid_username_and_password(String username,String password) {
	driver.findElement(By.id("user-name")).sendKeys(username);
	driver.findElement(By.id("password")).sendKeys(password);		
	}  
	//To enter login button
	@When("^the user clicks the login button$")
	public void the_user_clicks_the_login_button() throws IOException{
	click_the_login_button();
	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(scrFile, new File("Screenshots\\Invalidlogin.jpg"));
    }
    //using assert if theerror message is displayed or not
	@Then("^Assert if the error message is displayed$")
	public void assert_if_the_error_message_is_displayed()  {
	String actual1 =driver.findElement(By.xpath("//h3")).getText();		
	if(actual1.contains("Username and password do not match any user in this service"))
		{
			System.out.println(actual1);
		}
	driver.close();
	}	
	
    //To launch the chrome browser
	@Given("^Launching the chrome browser$")
	public void launching_the_chrome_browser1() {
	the_user_launched_the_chrome_browser();
	}    
	//To launch the application
	@When("^launching the application$")
	public void launching_the_application1() { 
	driver.get("https://www.saucedemo.com/");
	driver.findElement(By.id("user-name")).sendKeys("standard_user");
	driver.findElement(By.id("password")).sendKeys("secret_sauce");
	driver.findElement(By.xpath("//input[@value='LOGIN']")).click();	       
	}
    //To sort A to Z items
	@When("^click on Name A to Z$")
	public void click_on_Name_A_to_Z() {
	driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
	driver.findElement(By.xpath("//option[contains(@value,'az')]")).click();		
	}
   //To compare first two items
	@When("^compare the first two item names$")
	public void compare_the_first_two_item_names() {
	String name1= driver.findElement(By.xpath("//div[text()='Sauce Labs Backpack']")).getText();
	String name2= driver.findElement(By.xpath("//div[text()='Sauce Labs Bike Light']")).getText();
	System.out.println(name1+"  "+name2);
	}
   //using assert whether these two items are in alpahbetical order or not
	@Then("^assert if the two names are in alpahbetical order$")
	public void assert_if_the_two_names_are_in_alpahbetical_order() {
	System.out.println("the list is in alphabetical order");
	driver.close(); 
	}	
	
    //To launch chrome browser
	@Given("^launching the chrome browser$")
	public void launching_the_chrome_browser2() {
	the_user_launched_the_chrome_browser();		
	}
    //To launch the application
	@When("^Launching the application$")
	public void launching_the_application2() {
	launching_the_application1();
	}
   ////To sort Z to A items
	@Then("^click on Name Z to A$")
	public void click_on_Name_Z_to_A() throws InterruptedException {
	driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
	driver.findElement(By.xpath("//option[contains(@value,'za')]")).click();
	Thread.sleep(3000);
	}
    //using assert whether these two items are in alpahbetical of Z to A
	@Then("^Assert if the two names are in alpahbetical order of Z-A$")
	public void assert_if_the_two_names_are_in_alpahbetical_order_of_Z_A() {
	String n1=driver.findElement(By.xpath("//div[text()='Test.allTheThings() T-Shirt (Red)']")).getText();
	String n2=driver.findElement(By.xpath("//div[text()='Sauce Labs Onesie']")).getText();
	System.out.println(n1+"   "+n2);
	System.out.println("It is in sorted order of Z-A");
	driver.close();		
	}
	
   //To launch the chrome browser
	@Given("^LAunching the chrome browser$")
	public void launching_the_chrome_browser3() {
	the_user_launched_the_chrome_browser();
	}
   //To launch the application
	@When("^LAunching the application$")
	public void launching_the_application3() {
	launching_the_application1();		
	}
	//To click name price high to low
	@Then("^click on Name price low to high$")
	public void click_on_Name_price_low_to_high() throws Throwable {		
	driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
	Actions at=new Actions(driver);
	at.sendKeys(Keys.DOWN);
	at.sendKeys(Keys.DOWN);
	at.sendKeys(Keys.ENTER);
	Thread.sleep(3000);
	}
   //To compare first two item prices
	@Then("^compare the first two item prices$")
	public void compare_the_first_two_item_prices() {		
	String price1=driver.findElement(By.xpath("//div[text()='7.99']")).getText();
	System.out.println(price1);
	String price1sub=price1.substring(1,4); 
	double	n1=Double.parseDouble(price1sub);		
	
	String price2=driver.findElement(By.xpath("//*[@id=\"inventory_container\"]/div/div[2]/div[3]/div")).getText();
	System.out.println(price2);
	String price2sub=price2.substring(1,4); 
	double  n2=Double.parseDouble(price2sub);
	Assert.assertTrue(n1<n2);		 
	}
    //using assert prices are in ascending order are not
	@Then("^Assert if the two item prices are in ascending order$")
	public void assert_if_the_two_item_prices_are_in_ascending_order() {
	System.out.println("It is in ascending order ");
	driver.close();
	}
	
    //To launch the chrome rowser
	@Given("^LAUnching the chrome browser$")
	public void launching_the_chrome_browser4() {
	the_user_launched_the_chrome_browser();
	}	
    //To launch the application
	@When("^LAUnching the application$")
	public void launching_the_application4() {
	launching_the_application1();
	}	
   //To click on name price gigh to low
	@Then("^click on Name price high to low$")
	public void click_on_Name_price_high_to_low() throws InterruptedException {
	driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
	driver.findElement(By.xpath("//option[@value='hilo']")).click();
	Thread.sleep(3000);
	}	
   //using two item prices are in descending order or not
	@Then("^Assert if the two item prices are in descending order$")
	public void assert_if_the_two_item_prices_are_in_descending_order() throws InterruptedException {
	String price3=driver.findElement(By.xpath("/html/body/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div")).getText();
	
	System.out.println(price3);					
	String price3sub=price3.substring(1,5);
	double n3=Double.parseDouble(price3sub);		
	String price4=driver.findElement(By.xpath("//div[text()='29.99']")).getText();
	System.out.println(price4);
	String price4sub=price4.substring(1,5);
	double n4=Double.parseDouble(price4sub);
	Assert.assertTrue(n3>n4);
	System.out.println("the prices are high to low");
	Thread.sleep(2000);
	driver.close();
	}

	//To launch the chrome browser
	@Given("^LAUNching the browser$")
	public void launching_the_browser5() {
	the_user_launched_the_chrome_browser();		
	}
   //To launch the application
	@When("^LAUNching the application$")
	public void launching_the_application5() {
	launching_the_application1();	}
	
   //To enter Add to cart of selected items
	@Then("^cLick on ADD TO CART of selected item$")
	public void click_on_ADD_TO_CART_of_selected_item() {
	driver.findElement(By.xpath("(//button)[3]")).click();

	}    
	//using assert if the item is added or not
	@Then("^Assert if the item is added in the cart$")
	public void assert_if_the_item_is_added_in_the_cart() throws InterruptedException {
	String num=driver.findElement(By.xpath("(//span)[8]")).getText();
	Assert.assertEquals("1",num);
	System.out.println("Item is added to cart");
	Thread.sleep(3000);
	driver.close();
	}
	
    //To launch the chrome browser
	@Given("^LAUNChing the browser$")
	public void launching_the_browser6() {
	the_user_launched_the_chrome_browser();
	}
	//To launch the application
	@When("^LAUNChing the application$")
	public void launching_the_application6() {
	launching_the_application1();
	}
   //To remove selected items from cart 
	@Then("^cLick REMOVE of selected item which is carted$")
	public void click_REMOVE_of_selected_item_which_is_carted() {
	driver.findElement(By.xpath("(//button)[3]")).click();
	driver.findElement(By.xpath("(//button)[3]")).click();
	}
    //using assert item is removed from the cart 
	@Then("^Assert if the item is removed from the cart$")
	public void assert_if_the_item_is_removed_from_the_cart() throws InterruptedException {
	String cart=driver.findElement(By.xpath("(//button)[3]")).getText();
	Assert.assertEquals("ADD TO CART",cart);
	System.out.println("Item is removed from cart");
	Thread.sleep(3000);
	driver.close();
	}
	
   //To launch the chrome browser
	@Given("^LAUNCHing the browser$")
	public void launching_the_browser7() {
	the_user_launched_the_chrome_browser();
	}
   //To launch the application
	@When("^LAUNCHing the application$")
	public void launching_the_application7() {
	launching_the_application1();
	}
   //To click on menu bar
	@When("^Click on Menu bar$")
	public void click_on_Menu_bar() {
	driver.findElement(By.xpath("(//button)[2]")).click();
		}
   //To click on logout button
	@When("^Click on Logout button$")
	public void click_on_Logout_button() throws IOException {
	driver.findElement(By.xpath("(//a[@class='bm-item menu-item'])[3]")).click();
	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(scrFile, new File("Screenshots\\logout.jpg"));
	}
   //using assert if the application is showing the login page 
	@Then("^Assert if the application is showing the login page$")
	public void assert_if_the_application_is_showing_the_login_page() {
    String login_page=driver.findElement(By.xpath("(//h4)[1]")).getText();
    Assert.assertEquals(login_page,"Accepted usernames are:");
    System.out.println("logged out successfully");
    driver.close();
	}
	
   //To launch the browser
	@Given("^LAUNCHIng the browser$")
	public void launching_the_browser8() {
	the_user_launched_the_chrome_browser();
	}
   //To launch the application
	@When("^LAUNCHIng the application$")
	public void launching_the_application8() {
	launching_the_application1();
	}
   //To click on menu bar
	@Then("^CLick on menu bar$")
	public void click_on_menu_bar() {
	driver.findElement(By.xpath("(//button)[2]")).click();		
	}
   //click on about
	@Then("^Click on About$")
	public void click_on_About() throws InterruptedException {
	driver.findElement(By.xpath("//a[@id='about_sidebar_link']")).click();
	Thread.sleep(5000);		
	}
   //using assert if the page is navigating to saucelabs
	@Then("^Assert if the page is navigating to saucelabs$")
	public void assert_if_the_page_is_navigating_to_saucelabs() {
	String title=driver.getTitle();
	System.out.println(title);
	Assert.assertEquals("Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs", title);
	System.out.println("It is navigating to the new page");
	driver.close();		
	}
	
   //To launch browser
	@Given("^LAUNCHINg the browser$")
	public void launching_the_browser9() {
    System.setProperty("webdriver.chrome.driver", "Drivers\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}
   //To launch application
	@When("^LAUNCHINg the application$")
	public void launching_the_application9() {
	driver.get("https://saucelabs.com/");
	}
    //To click on search symbol
	@When("^CLIck on search Symbol$")
	public void click_on_search_Symbol1() {
	driver.findElement(By.xpath("//i[@class='svg svg-search nav-action-list-items-search-form-icon has-fill-white']")).click();		
	}
    //To Enter valid information
	@When("^Enter the invalid info and click Enter from keyboard$")
	public void enter_the_invalid_info_and_click_Enter_from_keyboard() {
	WebElement element=driver.findElement(By.xpath("(//input[@placeholder='Search'])[2]"));
	element.sendKeys("ghgddgj");
	element.sendKeys(Keys.ENTER);		
	}
    //using Assert True if it is Displaying No Results found or not
	@Then("^Assert True if it is Displaying No Results found$")
	public void assert_True_if_it_is_Displaying_No_Results_found() {
	String result=driver.findElement(By.xpath("//*[@id=\"template__columns\"]/div[2]/div/div[1]/p")).getText();
	System.out.println(result);
	Assert.assertEquals("No Results Found", result);
	driver.close();	
	}
	
    //To launch the browser
	@Given("^LAUNCHING the browser$")
	public void launching_the_browser10() {
	System.setProperty("webdriver.chrome.driver", "Drivers\\chromedriver.exe");
	driver=new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	}
   //To launch the application
	@When("^LAUNCHING the application$")
	public void launching_the_application10() {
	driver.get("https://saucelabs.com/");
	}
   //To click on search symbol
	@Then("^click on search Symbol$")
	public void click_on_search_Symbol() {
	driver.findElement(By.xpath("//i[@class='svg svg-search nav-action-list-items-search-form-icon has-fill-white']")).click();
	}
    // To enter valid information
	@Then("^Enter the valid info and click Enter from keyboard$")
	public void enter_the_valid_info_and_click_Enter_from_keyboard() {
	WebElement element=driver.findElement(By.xpath("(//input[@placeholder='Search'])[2]"));
	element.sendKeys("selenium");
	element.sendKeys(Keys.ENTER);
	}
    //using assert True if it is not  Displaying No Results found
	@Then("^Assert True if it is not  Displaying No Results found$")
	public void assert_True_if_it_is_not_Displaying_No_Results_found() throws InterruptedException {
	String result1=driver.findElement(By.xpath("//*[@id=\"template__columns\"]/div[2]/div/div[1]/div/a[1]/p[1]")).getText();
	Assert.assertNotEquals("No Results Found", result1);
	System.out.println("searched results are found");
	Thread.sleep(3000);
	driver.close();
	}
	
   //To launch the browser
	@Given("^LAUNCHING The browser$")
	public void launching_The_browser() {
	the_user_launched_the_chrome_browser();
	}
   //To launch the application
	@When("^LAUNCHING The application$")
	public void launching_The_application() {
	launching_the_application9();
	}
   //To enter valid email format and click on submit
	@Then("^enter the valid email format  and click on submit button$")
	public void enter_the_valid_email_format_and_click_on_submit_button() throws IOException {
	WebElement email=driver.findElement(By.id("Email"));
	email.sendKeys("xyzabc@gmail.com");
	email.sendKeys(Keys.ENTER);
	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(scrFile, new File("Screenshots\\validmail.jpg"));
	}
   //using assert whether it is displaying thank you message 
	@Then("^Assert if it is displaying Thank you message$")
	public void assert_if_it_is_displaying_Thank_you_message() throws InterruptedException {
	String message=driver.findElement(By.xpath("//p[@class='supertitle']")).getText();
	Assert.assertNotEquals("Thank you for your interest", message);
	Thread.sleep(2000);
	System.out.println("Thank you for your interest");
	driver.close();
	}
	
   //To launch the browser
	@Given("^LAUNCHING THe browser$")
	public void launching_THe_browser() {
	the_user_launched_the_chrome_browser();
	}
   //To launch the application
	@When("^LAUNCHING THe application$")
	public void launching_THe_application() {
	launching_the_application9();
	}
   //To enter invalid email format an click on submit
	@Then("^enter the Invalid email format  and click on submit button$")
	public void enter_the_Invalid_email_format_and_click_on_submit_button() throws IOException {
	WebElement email1=driver.findElement(By.xpath("//input[@placeholder='Enter Email Address']"));
	email1.sendKeys("bbvbvbvk$gmail.com");
	email1.sendKeys(Keys.ENTER);
	File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(scrFile, new File("Screenshots\\invalidmail.jpg"));		
	}
   //using assert displaying error message or not
	@Then("^Assert if it is displaying an error message$")
	public void assert_if_it_is_displaying_an_error_message() throws InterruptedException {
	String message1=driver.findElement(By.xpath("//div[@class='mktoErrorMsg']")).getText();
	Assert.assertNotEquals("Must be valid email. ", message1);
	Thread.sleep(2000);
	System.out.println(message1);
	driver.close();
	}
	
   //To launch chrome browser
	@Given("^LAUNCHING THE browser$")
	public void launching_THE_browser() {
	the_user_launched_the_chrome_browser();
	}
   //To launch application
	@When("^LAUNCHING THE Application$")
	public void launching_THE_Application() {
	launching_the_application9();
	}
   //To click on resources
	@When("^click on resources$")
	public void click_on_resources() {
	}
   //To click on selenium
	@When("^click on selenium$")
	public void click_on_selenium() {
	driver.findElement(By.linkText("Resources")).click();
	WebElement sel=driver.findElement(By.linkText("Selenium"));
	Actions action =new Actions(driver);
	action.moveToElement(sel).click().build().perform();
	}
   //using assert switching to the new tab or not
	@Then("^Assert if it is Switching to the new tab$")
	public void assert_if_it_is_Switching_to_the_new_tab() {		
	String Url = driver.getCurrentUrl();
	System.out.println(Url);
	Assert.assertEquals("https://saucelabs.com/", Url);
	System.out.println("It is navigating to the selenium homepage");
	driver.close();		
	}
   //To launch the browser
	@Given("^LAUNCHING THE Browser$")
	public void launching_THE_Browser() {
	the_user_launched_the_chrome_browser();
	}
   //To launch the application
	@When("^LAUNCHING THE APPlication$")
	public void launching_THE_APPlication() {
	launching_the_application9();
	}
   //using assert it is displaying copyright or not
	@Then("^Assert if it is displaying the copyright in the footer section$")
	public void assert_if_it_is_displaying_the_copyright_in_the_footer_section() {
	String copyright =driver.findElement(By.xpath("//div[@class='copyright']")).getText();
	Assert.assertEquals("© 2020 Sauce Labs Inc., all rights reserved. SAUCE and SAUCE LABS are registered trademarks owned by Sauce Labs Inc. in the United States, EU, and may be registered in other jurisdictions.", copyright);
	}
}
