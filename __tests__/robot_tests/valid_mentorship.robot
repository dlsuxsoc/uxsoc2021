*** Settings ***
Documentation   A test suit for valid use of the book a mentor page.
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***

Valid Book A Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        February 11, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:firstName      Jake
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:success-book-modal

Invalid Missing Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Input Text      name:firstName      Jake 
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Missing Date Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Input Text      name:firstName      Jake 
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Missing Date Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        March 25, 2022
    Input Text      name:firstName      Jake 
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Missing FirstName Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        February 11, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Missing LastName Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      1
    Select From List By Value           name:bookingDate        February 21, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:firstName      Jake 
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Missing Email Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        February 11, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:firstName      Jake
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Wrong Email Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        February 11, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:firstName      Jake
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Wrong Number Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        February 11, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:firstName      Jake
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     631234567890
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Invalid Missing All Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:book-modal

Valid Book A Different Mentor
    Open Browser To Mentorship Booking Page
    Sleep   1s
    Execute Javascript  document.getElementById("book-mentor-header").scrollIntoView(true)
    Sleep   5s
    Wait Until Page Contains            Book a Mentor
    Select From List By Value           name:bookingMentor      0
    Select From List By Value           name:bookingDate        February 11, 2022
    Select From List By Value           name:bookingSlot        03:00PM-05:00PM
    Input Text      name:firstName      Jake
    Input Text      name:lastName       Paul
    Input Text      name:nickname       Jake
    Input Text      name:contactNum     639123456789
    Input Text      name:email          jake_paul@email.com
    Input Text      name:message        Hello there
    Select From List By Value           name:bookingMentor      2
    Select From List By Value           name:bookingDate        February 23, 2022
    Select From List By Value           name:bookingSlot        12:45AM-12:45PM
    Click Element                       id:book-btn
    Sleep   7s
    Page Should Contain Element     id:success-book-modal