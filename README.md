# _Ping Pong Number List_

#### _Turns a user inputted number into a list of numbers, pings, pongs, and pingpongs, June 2016_

#### By _**Ashley Riehl**_

## Description

_This webpage provides a form for the users to enter and submit a number.  The webpage then stores an array of all of the integer between 0 and that number.  It replaces all of the number divisible by 3 with "ping", 5 with "pong", and 15 with "pingpong." Finally it outputs that array into a bulleted list on the webpage._

_Check it out on Github:_ https://capriciash.github.io/ping_pong/

## Specifications

* _It can count up to the provided number._
  * _**Example Input:** 2_
  * _**Example Output:** [1, 2]_
* _It can replace all numbers divisible by 3 with "ping"._
  * _**Example Input:** 3_
  * _**Example Output:** [1, 2, "ping"]_
* _It can replace all numbers divisible by 5 with "pong"._
  * _**Example Input:** 5_
  * _**Example Output:** [1, 2, "ping", 4, "pong"]_
* _It can replace all numbers divisible by 15 with "pingpong"._
  * _**Example Input:** 15_
  * _**Example Output:** [1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]_
* _When the user inputs a number less than 1, it displays an alert asking the user to "please enter a number greater than 1."_
  * _**Example Input:** -3_
  * _**Example Output:** "Please enter a number greater than 1."_
* _When the inputs something that is not a number, it displays an alert asking the user to "please enter a valid number."_
  * _**Example Input:** Hello_
  * _**Example Output:** "Please enter a number."_

## Known Bugs

_Instead of adding a warning when users try to input something that isn't a number, I created a form that only allows users to enter numbers._

## Support and contact details

_If you have any issues, questions, ideas, or concerns, please feel free to make any suggestions to the repo on github or contact me at capriciash@gmail.com._

## Technologies Used

_This webpage uses HTML, CSS, Bootstrap, JavaScript, and jQuery._

### License

*This is licenses under an GPL license*

Copyright (c) 2016 **_Ashley Riehl_**
