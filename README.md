# Welcome to Fantom.ai

Fantom.ai is a simple web app that takes a block of text, analyses it, and displays the emotional stats of the analyzed text, whether it is ironic, or has confidences or a sense of agreement.



## Installation 

This project packages where managed by Yarn, using NPM may cause errors. 

**First: install the required packages:**

`yarn install`

**Second: Run ExpressJS Localhost:**

`npm start`

**Third: Compile The Code:**

`npm run build-prod`

**Fourth: Open your favorite browser and visit this link:**

> http://localhost:8081

And that's it!



## Run Unit Tests

This project uses **Jest** for writing and executing the test code, to run Jest, please type `jest` in your terminal, 

make sure your terminal current directory is at the project top directory.



## Things to Consider When Testing The Code...

- ExpressJS will crash if your internet is really really slow, credits goes to my ISP for discovering this bug.

- When running Jest, please be sure ExpressJS is up since some unit tests depend on it.
