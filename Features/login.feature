Feature: Login functionality
@smoke
Scenario: Login with valid credentials
Given User is on the login page
When User enters valid username and password
Then User Should be logged in