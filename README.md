# Stretch Goals

## Second ball with different scoring
10 points for a goal with the brown ball - Quaffle
100 points for a goal with the golden ball - Snitch

## End Game
First team to achieve 500 points wins the game. An Alert will popup declaring which team won the game. When the user clicks okay, another game will start with the scores reset to 0.

## 2 Second wait after goal scored
- After a goal with the Quaffle, there is a two second delay before the ball is launched. The Quaffle hovers, in typically Harry Potter fashion, at the starting place for 2 seconds before launching it self.

## Hack Physics
- Paddle collision produces 2% extra speed every time the ball hit a paddle.
- Ball has a greater range of where it can end up on the y axis when it collides with a paddle in order to increase the amount of randomness in the game. 


# Pong Game Starter

A starter project for a basic pong game using SVGs.

## Setup

Ensure you have [Node.js](https://nodejs.org/en/) installed first.

**Install dependencies:**

`$ npm install`

**Run locally with the Parcel dev server:**

`$ npm start`

Once you run the start command you can access your project at http://localhost:3000.

Read more about the [Parcel web application bundler here](https://parceljs.org/).

## Deploy

The deployment workflow for this project will be a bit different from what you've used when deploying simple static websites.

To deploy your finished Pong project as a GitHub page, you must first **update the `predeploy` script in the `package.json` file with the name of your repo.**

For example, if your repo URL is:

https://github.com/bob/pong-project

Update the `predeploy` script as follows:

```json
"predeploy": "rm -rf dist && parcel build index.html --public-url /pong-project",
```

Once you have done this, you can run:

`$ npm run deploy`

Now check out your deployed site 🙂


## Image Rights

The background image is sourced from https://hpmedia.bloomsbury.com/rep/g/page-background%20-%20product.png
