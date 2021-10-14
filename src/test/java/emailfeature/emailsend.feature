Feature: email send feature
  

  Scenario Outline: Verify email functionality
  Given User is on Elearning Application
    When User click on Sign up page
    When user enters "<firstname>","<lastname>", "<email>", "<username>", "<password>", "<confirm password>"
    Then User clicks on rigister button
    And User navigates to application
    
    Examples:
    | firstname | lastname | email               | username     | password     | confirm password |
    | Snesk11   | kha      |snekhask111@gmail.com| snekhask11 1 | snekhask111  | snekhask111      |
    
    Scenario Outline: verify Compose
    Given user is back on Elearning platform
    When user enters login credentials  "<username1>", "<password1>"
    Then user clicks on login
    And user is redirected to the Dashboard
    Then user clicks on compose
    And user is on compose message page
    Then user enters "<name>" in sendTo field
    Then user chooses option from list
    Then user enters "<subject>" in subject field
    And user clicks on Send Message
    Then user will see , message has ben sent
    

    Examples: 
      | username1  | password1  | name  | subject |
      | pqrs      | pqrs123    | virat | welcome    |
 
    
          

  
