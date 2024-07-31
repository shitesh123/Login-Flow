Feature: Magneto User Creation

    Scenario: Create a user account and verify that user is able to login with valid credentials
       Given I navigate to magneto software create account page
        When I click on Create an Account to navigate user creation account
         And I add user first and last name
         And I add user sign in details
         And I click on Create an Account button
         And I verify that user gets created by checking the successful registration message and user email
         And I click on logout
         And I verify that user be logout
         And I navigate to signin page
         And I add user login email and password and click on sign in
        Then I verify that user should be logged in
        