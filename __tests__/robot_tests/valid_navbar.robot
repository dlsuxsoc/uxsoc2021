*** Settings ***
Documentation   A test suit for valid use of the about page
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***

Valid Logo Button Pressed
    Open Browser To Services Page
    Click Element    id:logo
    Page Should Contain     User Experience Society - DLSU

Valid Home Button Pressed
    Open Browser To About Page
    Click Element    id:navHome
    Page Should Contain     User Experience Society - DLSU

Valid About Button Pressed
    Open Browser To Landing Page
    Click Element    id:navAbout Us
    Page Should Contain     UX Society

Valid Services Button Pressed
    Open Browser To About Page
    Click Element    id:navServices
    Page Should Contain     Community Engagement

Valid Events Button Pressed
    Open Browser To About Page
    Click Element    id:navEvents
    Page Should Contain     All

Valid Articles Button Pressed
    Open Browser To About Page
    Click Element    id:navArticles
    Page Should Contain     All

Valid Mentors Button Pressed
    Open Browser To About Page
    Click Element    id:navMentors
    Sleep   7s
    Page Should Contain     Our mentors

Valid Join Us Button Pressed
    Open Browser To About Page
    Click Element    id:navJoin
    Sleep   7s
    Page Should Contain     Membership Application
