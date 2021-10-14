package emailDefination;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import emailAnnotation.emailannotation;


public class emaildefination {
	
	WebDriver driver = emailannotation.driver;
	
	@Given("User is on Elearning Application")
	public void user_is_on_Elearning_Application() {
		System.out.println("Welcome to elearning");
	   
	}

	@When("User click on Sign up page")
	public void user_click_on_Sign_up_page() {
	    try {
	    	driver.findElement(By.xpath("//*[text()=' Sign up! ']")).click();
	    }
	    catch (Exception e)
	    {
	    	System.out.println("User is unable to click on sign up page"+e);
	    }
	}
	@When("user enters {string},{string}, {string}, {string}, {string}, {string}")
	public void user_enters(String fName, String lName, String email, String username, String pass, String conpass) {
		try {
			driver.findElement(By.name("firstname")).sendKeys(fName);
			driver.findElement(By.name("lastname")).sendKeys(lName);
			driver.findElement(By.name("email")).sendKeys(email);
			driver.findElement(By.id("username")).sendKeys(username);
			driver.findElement(By.id("pass1")).sendKeys(pass);
			driver.findElement(By.id("pass2")).sendKeys(conpass);
		} 
		 catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println("Not able to login"+e);
		    Assert.fail();
			
		}
	}

	@Then("User clicks on rigister button")
	public void user_clicks_on_rigister_button() {
		try {
			driver.findElement(By.id("registration_submit")).click();
		} 
		  catch (Exception e) {
			System.out.println("Not able to click on register button"+e);
		}
		  }
	@Then("User navigates to application")
	public void user_navigates_to_application() {
		try {
			String expectedtitle= "My Organization - My education - Registration";
			 String actualTitle=driver.getTitle();
			 Assert.assertEquals(expectedtitle,actualTitle );
		} 
		 catch (Exception e) {
			System.out.println("Not able to login to dashborad");
			Assert.fail();
		 }
	    
	}
	@Given("user is back on Elearning platform")
	public void user_is_back_on_Elearning_platform() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Subhash\\Documents\\Downloads\\chromedriver.exe"); 

		driver=new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/index.php");
		System.out.println("User is on sign up page");
		
	    
	}

	@When("user enters login credentials  {string}, {string}")
	public void user_enters_login_credentials(String username1, String password1) {
		try {
			driver.findElement(By.name("login")).sendKeys(username1);
			
			driver.findElement(By.name("password")).sendKeys(password1);
		}
		catch(Exception e)
		{
			System.out.println("Not able to enter credentials" +e);
			 Assert.fail();
	}
	    
	}

	@Then("user clicks on login")
	public void user_clicks_on_login() {
		try {
			  driver.findElement(By.name("submitAuth")).click();
		  }
		  catch(Exception e)
		  {
			  System.out.println("Not able to login" +e);
		  }
		
	    
	}

	@Then("user is redirected to the Dashboard")
	public void user_is_redirected_to_the_Dashboard() {
		System.out.println("User is on Dashboard");
	    
	}

	@Then("user clicks on compose")
	public void user_clicks_on_compose() {
		try {
			driver.findElement(By.xpath("//a[contains(text(),'Compose')]")).click();
		 }
		 catch(Exception e)
		 {
			 System.out.println("not able to compose" +e);
		 }
	   
	}

	@Then("user is on compose message page")
	public void user_is_on_compose_message_page() {
		try {
			boolean b1 = driver.findElement(By.xpath("//*[@id='cm-content']/div/ul/li")).isDisplayed();
		System.out.println("User is on Compose Message page" +b1);
		}
		catch(Exception e)
		{
			System.out.println("user is not on compose message page "+e);
			
		}
	}

	@Then("user enters {string} in sendTo field")
	public void user_enters_in_sendTo_field(String name) {
		try {
	    	driver.findElement(By.xpath("//*[@class='select2-search__field']")).sendKeys(name);
	    }
	    catch(Exception e)
	    {
			 System.out.println("not able to enter name" +e);
	    }
	}

	@Then("user chooses option from list")
	public void user_chooses_option_from_list() {
		try {
			  Thread.sleep(3000);
			  driver.findElement(By.xpath("//li[contains(text(),'virat kohli (virat)')]")).click();
			
			     }
		    catch(Exception e)
		    {
				 System.out.println("not able to choose name" +e);
		    }
	    
	}

	@Then("user enters {string} in subject field")
	public void user_enters_in_subject_field(String subject) {
		try {
			driver.findElement(By.name("title")).sendKeys(subject);
	    }
	    catch(Exception e)
	    {
			 System.out.println("not able to give subject" +e);
	    }
	    
	}

	@Then("user clicks on Send Message")
	public void user_clicks_on_Send_Message() {
		try {
			driver.findElement(By.id("compose_message_compose")).click();
	    }
	    catch(Exception e)
	    {
			 System.out.println("not able to hit  send buttont"+e);
	    }
	   
	}

	@Then("user will see , message has ben sent")
	public void user_will_see_message_has_ben_sent() {
		boolean m = driver.findElement(By.xpath("//*[@id='cm-content']/div/div[2]/div/div[1]")).isDisplayed();
		System.out.println("message is sent" +m);
	    
	}

	
}
	

