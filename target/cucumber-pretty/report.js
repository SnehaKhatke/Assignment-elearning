$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/emailfeature/emailsend.feature");
formatter.feature({
  "name": "email send feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify email functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on Sign up page",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cfirstname\u003e\",\"\u003clastname\u003e\", \"\u003cemail\u003e\", \"\u003cusername\u003e\", \"\u003cpassword\u003e\", \"\u003cconfirm password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on rigister button",
  "keyword": "Then "
});
formatter.step({
  "name": "User navigates to application",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "username",
        "password",
        "confirm password"
      ]
    },
    {
      "cells": [
        "Snesk11",
        "kha",
        "snekhask111@gmail.com",
        "snekhask11 1",
        "snekhask111",
        "snekhask111"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify email functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User is on Elearning Application",
  "keyword": "Given "
});
formatter.match({
  "location": "emaildefination.user_is_on_Elearning_Application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on Sign up page",
  "keyword": "When "
});
formatter.match({
  "location": "emaildefination.user_click_on_Sign_up_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"Snesk11\",\"kha\", \"snekhask111@gmail.com\", \"snekhask11 1\", \"snekhask111\", \"snekhask111\"",
  "keyword": "When "
});
formatter.match({
  "location": "emaildefination.user_enters(String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on rigister button",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_clicks_on_rigister_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User navigates to application",
  "keyword": "And "
});
formatter.match({
  "location": "emaildefination.user_navigates_to_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "verify Compose",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is back on Elearning platform",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters login credentials  \"\u003cusername1\u003e\", \"\u003cpassword1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "name": "user is redirected to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on compose",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on compose message page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \"\u003cname\u003e\" in sendTo field",
  "keyword": "Then "
});
formatter.step({
  "name": "user chooses option from list",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003csubject\u003e\" in subject field",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on Send Message",
  "keyword": "And "
});
formatter.step({
  "name": "user will see , message has ben sent",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username1",
        "password1",
        "name",
        "subject"
      ]
    },
    {
      "cells": [
        "pqrs",
        "pqrs123",
        "virat",
        "welcome"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify Compose",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is back on Elearning platform",
  "keyword": "Given "
});
formatter.match({
  "location": "emaildefination.user_is_back_on_Elearning_platform()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters login credentials  \"pqrs\", \"pqrs123\"",
  "keyword": "When "
});
formatter.match({
  "location": "emaildefination.user_enters_login_credentials(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_clicks_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is redirected to the Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "emaildefination.user_is_redirected_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on compose",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_clicks_on_compose()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is on compose message page",
  "keyword": "And "
});
formatter.match({
  "location": "emaildefination.user_is_on_compose_message_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"virat\" in sendTo field",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_enters_in_sendTo_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user chooses option from list",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_chooses_option_from_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"welcome\" in subject field",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_enters_in_subject_field(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on Send Message",
  "keyword": "And "
});
formatter.match({
  "location": "emaildefination.user_clicks_on_Send_Message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will see , message has ben sent",
  "keyword": "Then "
});
formatter.match({
  "location": "emaildefination.user_will_see_message_has_ben_sent()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});