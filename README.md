# Rock-Paper-Scissors

### Abstract:
[//]: <> (Briefly describe what you built and its features. What problem is the app solving? How does this application solve that problem?)

I've built a Rock-Paper-Scissors game with a computer player. The game features two difficulty modes, Classic and Future, and allows players to choose between Rock, Paper, Scissors, Boom and Hand. The game keeps track of the wins of both players then displays the results on the screen.The game also allows players to restart the game after each round. The problem to solve for this app was providing an interactive and entertaining way to play the classic game of Rock-Paper-Scissors. The application implements a computer player, different difficulty modes and a clean and easy to use interface, making the user- expierience fluid and easy.

### Installation Instructions:
[//]: <> (What steps does a person have to take to get your app cloned down and running?)

Open up the terminal and paste the SSH code after typing git clone in the terminal. Next enter the repesitory with the cd command. Then type code . and the code will come up in the text editer. Then in the terminal type open index.html and the application will open in the browser.

### Preview of App:
[//]: <> (Provide ONE gif or screenshot of your application - choose the "coolest" piece of functionality to show off.)

![Screen Shot 2023-01-17 at 3 30 45 PM](https://user-images.githubusercontent.com/76410246/213026764-6e4b2790-0da3-435a-b136-381bc3e65150.png)

### Context:
[//]: <> (Give some context for the project here. How long did you have to work on it? How far into the Turing program are you?)

Using Javascript functionality which simulates a game of rock, paper, scissors. The game allows users to select the game mode by clicking on either the "Classic Mode" button or the "Future Mode" button which initiates a new game has begun. The game also allows players to select a move by clicking on either a rock, paper or scissors (hand, boom in "Future Mode") image. The code uses the JavaScript class constructors as a data model, which creates an object and adds functionality for the game and reactive experience for the players. The class constructors are responsible for the methods of determining the winner of the game and displaying the results.Using JavaScript event listeners adds interactivity to the game from a user-face standpoint, such as allowing users to select game modes and making moves. The code uses CSS/Flexbox to style and organize the game interface . I would say I started working on the evening of Jan 11th and finished Jan 16th (the project start/end date was Jan 10th - Jan 17th). I am currently at the end of my Mod-1 expierince and elevating to Mod-2 in two weeks!

### Contributors:
[//]: <> (Who worked on this application? Link to their GitHubs.)

https://github.com/jmartin777  :: Joshua Martin

### Learning Goals:
[//]: <> (What were the learning goals of this project? What tech did you work with?)

The main learning goals of this project for me was to understand how to create a game using JavaScript. I felt it was a way for us to handle user interaction with a randomzied response system that triggers logic from event listeners. Which process and update the UI using DOM manipulation from Javascript. The code is written in JavaScript which uses classes and objects to input the game logic. Event listeners to shapes user interaction and DOM manipulation to reveal elements on a webpage. The application uses HTML, CSS/Flex to design and organize the layout/style of the webpage.

### Wins + Challenges:
[//]: <> (What are 2-3 wins you have from this project? What were some challenges you faced - and how did you get over them?)

Understanding how to use JavaScript events to create a simple game using the Rock-Paper-Scissors logic. And to handle user interactions that update the game state. I felt using the HTML CSS and Javascript togehtor from the ground up in this application was a huge win for me. Another aspect of the project was creating different class levels as a "difficulty" global variable which was a huge marker for me in organazation and understanding diffirent Logic states I was running depending on the event delegation process. This really allowed me to lean into understanding how to use classes and objects in JavaScript to organize and structure code with the many methods you can weave into one another to create new logic within a data model. Some challenges for me was in the writing/debugging process of the logical input that decides the diffrernt outcomes of a win from either a player or a computer.I faced where the wins were not being updated in the data model but yet i was seeing the physical manipulation of the UI announcing wins.. So i decided to seperate them into two different 'if' statements and test the logic from there (adding more lines of code) to see if my logic was working. In also finding a solution to this I created a function that restarts the turn and updates the model for wins to be updated . To avail! I was able to see the outcomes I was expecting after breaking my code once or twice after that! I really want to emphasize the lightbulb moments I had working on this project and really seeing mod1 in motion for me. Creating a data model and the functionality (using helper functions within everything) and global variables to help with the modes in which you can use as direction within your functionality really made me think differently.
