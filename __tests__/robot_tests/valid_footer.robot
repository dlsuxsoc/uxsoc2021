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
    Sleep   1s
    Execute Javascript  document.getElementById("footerLogo").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerLogo
    Page Should Contain     User Experience Society - DLSU

Valid About Button Pressed
    Open Browser To Landing Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerAbout Us").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerAbout Us
    Page Should Contain     UX Society

Valid Services Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerServices").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerServices
    Page Should Contain     Community Engagement

Valid Events Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerEvents").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerEvents
    Page Should Contain     All

Valid Articles Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerArticles").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerArticles
    Page Should Contain     All

Valid Mentors Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerMentors").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerMentors
    Sleep   20s
    Page Should Contain     Our mentors

Valid Facebook Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerFb").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerFb
    Page Should Contain     Group

Valid Twitter Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerTwitter").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerTwitter
    Page Should Contain     Tweets

Valid Instagram Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerInstagram").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerInstagram
    Page Should Contain     Posts

Valid Discord Button Pressed
    Open Browser To About Page
    Sleep   1s
    Execute Javascript  document.getElementById("footerDiscord").scrollIntoView(false)
    Sleep   1s
    Click Element    id:footerDiscord
    Page Should Contain     Discord