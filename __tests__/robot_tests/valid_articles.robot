*** Settings ***
Documentation   A test suit for valid use of the articles page.
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***
# in DateTabs.js
# className of each button was changed to className={`${styles.dates} y${year} block w-full text-left`}
# added y${year}

Valid Filter By All Articles
    Open Browser To Articles Page
    Filter By   All
    # Check if the element that is active is the paragraph with the text 'All'
    Element Text Should Be  class:DateTabs_active__1Dz9v    All

Valid Filter By Year 2019 Articles
    Open Browser To Articles Page
    Filter By   2019
    # Check if the element that is active is the paragraph with the text '2019'
    Element Text Should Be  class:DateTabs_active__1Dz9v    2019

Valid Filter By Year 2021 Articles
    Open Browser To Articles Page
    Filter By   2021
    # Check if the element that is active is the paragraph with the text '2021'
    Element Text Should Be  class:DateTabs_active__1Dz9v    2021

Valid Filter Through Multiple Years Before Choosing All Articles
    Open Browser To Articles Page
    Filter By   2021
    Filter By   2018
    Filter By   All
    # Check if the element that is active is the paragraph with the text 'All'
    Element Text Should Be  class:DateTabs_active__1Dz9v    All

Invalid Filter By Year 1234 Articles
    Open Browser To Articles Page
    Page Should Not Contain     class:y1234

Valid View Specific Article
    Open Browser To Articles Page
    Sleep   7s
    Execute Javascript  document.getElementById("user-experience-society-dlsu-at-uxph-roadshow").scrollIntoView()
    Sleep   7s
    Wait Until Page Contains    Join Us
    Sleep   1s
    Click Element    id:user-experience-society-dlsu-at-uxph-roadshow
    Sleep   1s
    Wait Until Page Contains    User Experience Society — DLSU at UXPH Roadshow