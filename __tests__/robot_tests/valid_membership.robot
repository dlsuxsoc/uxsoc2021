*** Settings ***
Documentation   A test suit for valid use of the about page
...
...             this test follows the example using keywords from
...             the SeleniumLibrary
Resource        resources.robot
Test Teardown   Close Browser

*** Test Cases ***

Blank First Name
    Open Browser To Membership Application Page
    Input Text  name:lastName   DELETE
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    First Name

Blank Last Name
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Last Name

Blank Birth Month
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Birth Date

Blank Birth Day
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bMonth     11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Birth Date


Blank Pronoun
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Preferred Pronoun

Blank Email
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Email

Blank College
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    College

Blank Program
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Program

Duplicate Check
    Open Browser To Membership Application Page
    Input Text  name:firstName  DONT
    Input Text  name:lastName   DELETE
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DUPLICATETEST@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Email

Complete Required Input
    Open Browser To Membership Application Page
    Input Text  name:firstName  DELETE
    Input Text  name:lastName   ME
    Input Text  name:bMonth     11
    Input Text  name:bDay       11
    Input Text  name:bYear      2000
    Sleep   .5s
    Execute Javascript  document.getElementsByName("email")[0].scrollIntoView(false)
    Sleep   .5s
    Select Radio Button     pronoun     He/ Him
    Input Text  name:email  DELETEME@dlsu.instructure.com
    Sleep   .5s
    Execute Javascript  document.getElementsByName("program")[0].scrollIntoView(false)
    Sleep   .5s
    Select From List By Value   name:college    De La Salle University - Manila
    Input Text  name:program    BS ORG
    Sleep   .5s
    Execute Javascript  document.getElementById("send").scrollIntoView(false)
    Sleep   .5s
    Click Element    id:send
    Sleep   5s
    Wait Until Page Contains    Application Submitted