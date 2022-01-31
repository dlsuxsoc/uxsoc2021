*** Settings ***
Documentation   A test suit for valid use of the about page
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***

Valid About Learn More Button Pressed
    Open Browser To Landing Page
    Sleep   .5s
    Execute Javascript  document.getElementById("abouthome").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:abouthome
    Wait Until Page Contains    Mission-Vision
    Page Should Contain     UX Society

Valid Events Learn More Button Pressed
    Open Browser To Landing Page
    Sleep   .5s
    Execute Javascript  document.getElementById("eventshome").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:eventshome
    Wait Until Page Contains    Events

Valid Articles Learn More Button Pressed
    Open Browser To Landing Page
    Sleep   .5s
    Execute Javascript  document.getElementById("articleshome").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:articleshome
    Wait Until Page Contains    Articles

Valid Projects Learn More Button Pressed
    Open Browser To Landing Page
    Sleep   .5s
    Execute Javascript  document.getElementById("serviceshome").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:serviceshome
    Wait Until Page Contains    Projects

