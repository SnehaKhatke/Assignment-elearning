package emailTestrunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/emailfeature"
		,glue={"emailDefination","emailAnnotation"},
		dryRun=true, // it executes without browser
				monochrome=true,
						plugin={"pretty","html:target/cucumber-pretty","junit:target/cucumber.xml","json:target/cucumber.json"}
		)
public class testRunner {

}
//"assignmentAnnotation"