*** Settings ***
Documentation   A test suit for valid use of the events page.
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***
# in DateTabs.js
# className of each button was changed to className={`${styles.dates} y${year} block w-full text-left`}
# added y${year}

Valid Filter By All Events
    Open Browser To Events Page
    Sleep   1s
    Execute Javascript  document.getElementsByClassName("yAll")[0].scrollIntoView(false)
    Sleep   1s
    Filter By   All
    # Check if the element that is active is the paragraph with the text 'All'
    Element Text Should Be  class:DateTabs_active__1Dz9v    All

Valid Filter By Year 2020 Events
    Open Browser To Events Page
    Sleep   1s
    Execute Javascript  document.getElementsByClassName("y2020")[0].scrollIntoView(false)
    Sleep   1s
    Filter By   2020
    # Check if the element that is active is the paragraph with the text '2020'
    Element Text Should Be  class:DateTabs_active__1Dz9v    2020

Valid Filter By Year 2018 Events
    Open Browser To Events Page
    Sleep   1s
    Execute Javascript  document.getElementsByClassName("y2018")[0].scrollIntoView(false)
    Sleep   1s
    Filter By   2018
    # Check if the element that is active is the paragraph with the text '2018'
    Element Text Should Be  class:DateTabs_active__1Dz9v    2018

Valid Filter Through Multiple Years Before Choosing All Events
    Open Browser To Events Page
    Sleep   1s
    Execute Javascript  document.getElementsByClassName("yAll")[0].scrollIntoView()
    Sleep   1s
    Filter By   2020
    Filter By   2018
    Filter By   All
    # Check if the element that is active is the paragraph with the text 'All'
    Element Text Should Be  class:DateTabs_active__1Dz9v    All

Invalid Filter By Year 1234 Events
    Open Browser To Events Page
    Sleep   1s
    Execute Javascript  document.getElementsByClassName("yAll")[0].scrollIntoView()
    Sleep   1s
    Page Should Not Contain     class:y1234

