package emailAnnotation;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class emailannotation {
	public static WebDriver driver;
	@Before
  public void initialization()
  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Subhash\\Documents\\Downloads\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://elearningm1.upskills.in/index.php");
  }
	@After
  
  public void close()
  {
	  driver.quit();
  }
}

