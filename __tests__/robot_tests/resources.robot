*** Settings ***
Documentation   A resource file with reusable keywords and variables
...
...             Creating system specific keywords from default keywords from
...             the SeleniumLibrary
Library         SeleniumLibrary

*** Variable ***
${SERVER}               localhost:3000
${BROWSER}              edge
${HOME URL}             http://${SERVER}/
${ABOUT URL}            http://${SERVER}/about
${SERVICES URL}         http://${SERVER}/services
${EVENTS URL}           http://${SERVER}/event
${ARTICLES URL}         http://${SERVER}/blog
${MEMBERSHIP URL}       http://${SERVER}/apply
${BOOKING URL}          http://${SERVER}/mentors

*** Keywords ***
Open Browser To Landing Page
    # open browser
    Open Browser    ${HOME URL}    ${BROWSER}
    # set window size
    Maximize Browser Window
    Sleep   10s  

Open Browser To About Page
    # open browser
    Open Browser    ${ABOUT URL}    ${BROWSER}
    # set window size
    Maximize Browser Window  
    Sleep   10s

Open Browser To Services Page
    # open browser
    Open Browser    ${SERVICES URL}    ${BROWSER}
    # set window size
    Maximize Browser Window  
    Sleep   10s

Open Browser To Events Page
    # open browser
    Open Browser    ${EVENTS URL}    ${BROWSER}
    # set window size
    Maximize Browser Window
    Sleep   10s

Open Browser To Articles Page
    # open browser
    Open Browser    ${ARTICLES URL}    ${BROWSER}
    # set window size
    Maximize Browser Window
    Sleep   10s
    
Open Browser To Membership Application Page
    # # open browser
    # Open Browser    ${MEMBERSHIP URL}    ${BROWSER}
    # # set window size
    # Maximize Browser Window
    Open Browser To Landing Page
    Click Element    id:navJoin
    Maximize Browser Window
    Sleep   10s

Open Browser To Mentorship Booking Page
    # open browser
    Open Browser    ${BOOKING URL}    ${BROWSER}
    # set window size
    Maximize Browser Window
    Sleep   10s
    
Filter By 
    [Arguments]     ${year}    
    Click Button    class:y${year}




