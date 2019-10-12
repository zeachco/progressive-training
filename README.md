# Progressive training
This is a challenge project which aims to on-board new JavaScript developers by proposing a full-stack project harder than TODO and Hello World examples

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
- testing and CI tools

## A few ressources to help
- General
    - [commonjs](https://nodejs.org/docs/latest/api/modules.html) (split code into multiple files)
    - [js version naming](https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/) (explains the different names given to javascript)
    - [2015/es6 features](http://es6-features.org) (compared to es5)
- Frontend
    - javascript single page app
        - [react](https://facebook.github.io/react/tutorial/tutorial.html) (reactive javascript view)
        - [create-react-app](https://github.com/facebookincubator/create-react-app) (bundler for react)
        - [redux](http://redux.js.org/) (advanced react app)
        - [xhr / http request](https://www.npmjs.com/package/axios)
    - designs and visuals
        - [css presentation](https://www.w3schools.com/css/css_intro.asp)
        - Preprocessors
            - [sass preprocessing](http://sass-lang.com/guide)
            - [sass-chokidar](https://github.com/michaelwayman/node-sass-chokidar) (convert sass or scss to css)
            - [autoprefixer](https://autoprefixer.github.io/)
        - CSS Frameworks
            - [bootstrap](http://getbootstrap.com/getting-started/)
            - [bulma](http://bulma.io/documentation/overview/start/)
            - [spectre](https://picturepan2.github.io/spectre/)
- Networking
    - [whatisrest](http://www.restapitutorial.com/lessons/whatisrest.html) (how to request from client to server)
- Backend
    - tools
        - [postman](https://www.getpostman.com/) (test your backend without frontend)
        - [nodemon](https://nodemon.io/) (refresh your node app on file change detection)
    - web server framework
        - [express](https://expressjs.com/) (easy server framework)
        - [express static server](https://expressjs.com/en/starter/static-files.html)
        - [express api tutorial](https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4)
        - [core nodejs http modules](https://nodejs.org/api/http.html)
        - [node path](https://nodejs.org/api/path.html)
        - [node files](https://nodejs.org/api/fs.html#fs_file_system)
    - databases
        - [sql/nosql comparasion](https://www.sitepoint.com/sql-vs-nosql-differences/)
        - [sqlite quickstart](https://sqlite.org/quickstart.html)
        - [mysql basic operations](https://dev.mysql.com/doc/mysql-getting-started/en/)
        - [sql wrapper for node](https://www.npmjs.com/package/mysql#introduction)
        - [mongodb](https://www.mongodb.com/what-is-mongodb) (nosql json/javascript database)
        - [mongoose](http://mongoosejs.com/) (mongodb wrapper for nodejs)
- Quality and processes
    - [Git](https://www.git-tower.com/blog/git-cheat-sheet/) (versionning tool)
    - [eslint](http://eslint.org/) (code quality inspector documentation)
    - [node eslint](https://www.npmjs.com/package/eslint) (actual runner to verify your code)
    - [CI tools](http://www.code-maze.com/top-8-continuous-integration-tools/) (continuous integration systems)
    - [travis](https://docs.travis-ci.com/user/getting-started/) (a free/minimal continuous integration system)

# The first steps checklist...
- [ ] fork a copy of this repo on your personnal github
    - [ ] have a github account
- [ ] get your forked version of the project cloned on your machine
    - [ ] have [Git](https://git-scm.com/downloads) installed locally
    - [ ] clone the project by entering `git clone [your forked repo url]` in your git terminal of equivalent git tool. The url should look like `https://github.com/[USERNAME]/progressive-training.git`
- [ ] have nodejs working, preferably a version higher than 6.0.0
    - [ ] downloading directly from the [download page] or using [NVM](https://github.com/creationix/nvm#install-script) (https://nodejs.org/en/download/)
    - [ ] have a working version of npm and node `node -v` and `npm -v` should give version numbers
    - [ ] understand how [commonjs](https://nodejs.org/docs/latest/api/modules.html#modules_require_id) works
- [ ] FRONTEND
    - [ ] Let's use a generator to create the client folder. install [CRA](https://github.com/facebookincubator/create-react-app) with `npm i -g create-react-app`
    - [ ] CRA will create the folder, add the required packages and install everything to bootstrap. Use `create-react-app client` from this project's root.
    - [ ] navigate to the newly created folder and explore the react app. Run it with `npm start` to start a server and view it running live

- [ ] BACKEND
    - [ ] create a folder to handle the server code and dependencies (let's assume the folder is called `server`)
    - [ ] in the server folder, initiate you npm package with `npm init` as this will be usefull to register our third party modules we will be using (`npm init -y` allow to skip the questionning if you find that anoying).
    - [ ] add a file named `server.js` in your server folder where your nodejs app will be running. Also add some content like `console.log('hello world') to make sure your app is running.

## First challenge
- Create a node server that serve a static folder "as is" which will contain our public html and assets.
- the server must be able to receive [HTTP VERBS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) `GET`, `POST`, `PUT` and `DELETE` on an endpoint called `/api/times` which list, adds, update and remove data from a MySQL database. This is easy using node frameworks such as [Express](https://expressjs.com/)
- I recommend [Knex](https://www.npmjs.com/package/knex) for javascript style API or [MySql](https://www.npmjs.com/package/mysql) to directly execute SQL queries
- Use react to list back the entries made by the client
- Create a pull request from your repo or branch that targets master
