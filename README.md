# Progressive training
This is a challenge project which aims to on-board new JavaScript developers by proposing a full-stack project harder than mere TODO and Hello World examples

## How it works
Steps by steps, reading this document, you will be asked to perform task which will allow you to interact with most javascript projects as a professional developper.

There is a lots of good tutorials which I don't intent to copy but only to reference in this project.

github.com's project management's feature will be used as it's the most common used git cloud service and it reflect quite well other tools.

Most listed `commands` will be here only as helper and should be executed with understanding of what they do. They are likely to work on unix based terminal (osx with xCode activated, linux, windows with cmder / git bash or any similar environment).

For any clarification, please open git issues. Also, Google is your friend.

## Prerequisites
- know your OS
- know how to use a console or a terminal
- know basic Javascript Syntax
- have a nice text editor that supports programming languages, I suggest [Visual Code Studio](https://code.visualstudio.com)
- being passionate to learn as the road is long

## Concepts to learn

- frontend and backend respectives javascript ecosystems
- working with a single page application as the frontend to optimise network ressources
- teamwork with branches and pull requests
- documentation, code quality and maintenability
- code transpiling, code standards (babel for es5, es6, es7...)
- restfull API approach
- microservice approach
- separation of concerns (avoiding spaghetti code)
- testing and [CI tools](http://www.code-maze.com/top-8-continuous-integration-tools/)

# The first steps checklist...

- [ ] fork a copy of this repo on your personnal github
    - [ ] have a github account
- [ ] get your forked version of the project cloned on your machine
    - [ ] have [Git](https://git-scm.com/downloads) installed locally
    - [ ] clone the project by entering `git clone [your forked repo url]` in your git terminal of equivalent git tool. The url should look like `https://github.com/[USERNAME]/progressive-training.git`
- [ ] have nodejs working, preferably a version higher than 6.0.0
    - [ ] downloading directly from the [download page] or using [NVM](https://github.com/creationix/nvm#install-script) (https://nodejs.org/en/download/)
    - [ ] have a working version of npm and node `node -v` and `npm -v` should give version numbers
    - [ ] understand how [commonjs](https://nodejs.org/docs/latest/api/modules.html) works
- [ ] FRONTEND
    - [ ] Let's use a generator to create the client folder. install [CRA](https://github.com/facebookincubator/create-react-app) with `npm i -g create-react-app`
    - [ ] CRA will create the folder, add the required packages and install everything to bootstrap. Use `create-react-app client` from this project's root.
    - [ ] navigate to the newly created folder and explore the react app. Run it with `npm start` to start a server and view it running live

- [ ] BACKEND
    - [ ] I like to work with a code refresher named [nodemon](https://nodemon.io/) (`npm i -g nodemon`). this works exactly like the `node` command but restarts automatically the app if a file changed.
    - [ ] create a folder to handle the server code and dependencies (let's assume the folder is called `server`)
    - [ ] in the server folder, initiate you npm package with `npm init` as this will be usefull to register our third party modules we will be using (`npm init -y` allow to skip the questionning if you find that anoying).
    - [ ] add a file named `server.js` in your server folder where your nodejs app will be running. Also add some content like `console.log('hello world') to make sure your app is running.

## First challenge
- Create a node server that serve a static folder "as is" which will contain our public html and assets.
- the server must be able to receive [HTTP VERBS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) `GET`, `POST`, `PUT` and `DELETE` on an endpoint called `/api/times` which list, adds, update and remove data from a MySQL database. This is easy using node frameworks such as [Express](https://expressjs.com/)
- I recommend [Knex](https://www.npmjs.com/package/knex) for javascript style API or [MySql](https://www.npmjs.com/package/mysql) to directly execute SQL queries
- Use react to list back the entries made by the client
- Create a pull request from your repo or branch that targets master