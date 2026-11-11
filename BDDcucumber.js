/*BDD-Behavior Driven Development
BDD in playwright is an approach of writing test in a buissness readable format
usually using Gherkin syntax such as:-given,when,then etc
playwright is then used to automate these steps through step defenition


cucumber is an BDD framework or tool,used to write testcase
in a simple human readable language called gherkin


keywords:- (starts with uppercase)

1. Feature:- Describes the functionality
2. Scenario:- Individual test case
3. Given:- Precondition or initial setup
4. When:- Action
5. Then:- Expected Result
6. And:- Additional Steps



folder name:- features
file name:- login.feature

example:- 
Feature;login functionality
Scenario; login with valid credential
Given; user is on the login page
When; user enters username and password
Then; user sucessfully navigated to homepage


login.feature
login.feature is a feature file,it contaions test scenario return into BDD formart using 
keywords like features,scenario, when,given,then
it is written in simple english even non-techinical useres can understand 

describe application behaviour- it explain how login functionality should work


Folder name: Step-defenitions
filename: login.step.js
login.steps.js is called step defeniton file,it contains the actual automation code for the 
each steps written inside the feature file


difference between login.feature and login.steps.js

login.feature                                        login.steps.js
contains test scenario                               contains automation code
written in english                                   written in javascript
easy for buisness user                               easy for automation test
uses Gvien,When,Then,etc                             uses playwright+cucumbercode
*/
