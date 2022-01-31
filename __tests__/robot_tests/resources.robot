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
${BOOKING URL}          http://${SERVER}/booking
${LANDING HERO IMG}     http://localhost:3000/_next/image?url=%2Fimages%2Fhome-1.png&w=1200&q=75
${EVENTS ALL}           xpath://*[@id="__next"]/main/section[2]/section/button[1]
${EVENTS 2018}          document.querySelector("#__next > main > section.flex.pt-28.pb-36.flex-col-reverse.lg\\:flex-row.justify-start.md\\:items-stretch.items-center > section > button:nth-child(5)")

*** Keywords ***
Open Browser To Landing Page
    # open browser
    Open Browser    ${HOME URL}    ${BROWSER}
    # set window size
    Maximize Browser Window  

Open Browser To About Page
    # open browser
    Open Browser    ${ABOUT URL}    ${BROWSER}
    # set window size
    Maximize Browser Window  

Open Browser To Events Page
    # open browser
    Open Browser    ${EVENTS URL}    ${BROWSER}
    # set window size
    Maximize Browser Window

Open Browser To Articles Page
    # open browser
    Open Browser    ${ARTICLES URL}    ${BROWSER}
    # set window size
    Maximize Browser Window
    
Open Browser To Membership Application Page
    # open browser
    Open Browser    ${MEMBERSHIP URL}    ${BROWSER}
    # set window size
    Maximize Browser Window
    
Filter By 
    [Arguments]     ${year}    
    Click Button    class:y${year}




