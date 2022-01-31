*** Settings ***
Documentation   A test suit for valid use of the about page
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***
# in about\index.js
# added abt-apply-btn to classname of the button that redirects user to application
Valid Join Button Pressed
    Open Browser To About Page
    Click Element    class:abt-apply-btn
    Wait Until Page Contains    Membership Application