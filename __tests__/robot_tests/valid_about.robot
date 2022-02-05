*** Settings ***
Documentation   A test suit for valid use of the about page
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***
# in about\index.js
# added abt-apply-btn to id of the button that redirects user to application
Valid Join Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("abt-apply-btn").scrollIntoView()
    Sleep   1s
    Wait Until Page Contains    Join Us
    Sleep   1s
    Click Element    id:abt-apply-btn
    Sleep   1s
    Wait Until Page Contains    Membership Application