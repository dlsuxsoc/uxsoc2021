*** Settings ***
Documentation   A test suit for valid opening of pages
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***
Valid Landing Page Opened
    Open Browser To Landing Page
    # check if in landing page
    Page Should Contain     User Experience Society - DLSU
    Page Should Contain     About UX Society DLSU

Valid About Page Opened
    Open Browser To About Page
    # check if in about page
    Page Should Contain     UX Society
    Page Should Contain     The Mission-Vision

Valid Events Page Opened
    Open Browser To Events Page
    # check if in events page
    Page Should Contain     Events

Valid Articles Page Opened
    Open Browser To Articles Page
    # check if in articles page
    Page Should Contain      Articles

Valid Membership Application Page Opened
    Open Browser To Membership Application Page
    # check if in membership application page
    Page Should Contain     Membership Application