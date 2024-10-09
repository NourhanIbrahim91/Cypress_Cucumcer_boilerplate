Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser at the deliveryWorkFlow login page
    Scenario: Validate Success Login
        When A user enters the username "nourhan.x.ibrahim@pwc.com", the password "8mU&ViMEr+N2", and clicks on the login button
        Then the user will be landed on the home page
    Scenario: Validate Incorrect Username Login Error Message
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | R1jO5\"*LE6lX |
        Then The error message "The username or password you entered is incorrect." is displayed
    Scenario: Validate Incorrect password Login Error Message
        When A user provides incorrect credentials, and clicks on the login button
            | username                  | password     |
            | nourhan.ibrahim21@pwc.com | testPassword |
        Then The error message "The username or password you entered is incorrect." is displayed