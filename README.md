# Progressive training
This is a challenge project which aims to on-board new JavaScript developers by proposing a full-stack project harder than mere TODO and Hello World examples

## How it works
Steps by steps, reading this document, you will be asked to perform task which will allow you to interact with most javascript projects as a professional developper.

There is a lots of good tutorials which I don't intent to copy but only to reference in this project.

github.com's project management's feature will be used as it's the most common used git cloud service and it reflect quite well other tools.

Most listed `commands` will be here only as helper and should be executed with understanding of what they do. They are likely to work on unix based terminal (osx with xCode activated, linux, windows with cmder / git bash or any similar environment).

For any clarification, please open git issues. Also, Google is your friend.

## Concepts to learn

- separation of concerns
- working with a single page application as the frontend to optimise network ressources
- microservice approach
- restfull-ish API approach (true restfull is for philosophers)
- teamwork with branches and pull requests
- documentation, code quality and maintenability
- code transpiling, code standards (es3, es5, es6, es7...)
- testing and CI tools

# The first steps checklist...

- [ ] get this project cloned on your machine
    - [ ] have git installed locally
    - [ ] have a github account
    - [ ] clone the project by entering `git clone [repo name]` in your git terminal of equivalent git tool
- [ ] have nodejs working, preferably a version higher than 6.0.0
    - [ ] downloading directly from the [download page] or using [NVM](https://github.com/creationix/nvm#install-script) (https://nodejs.org/en/download/)
    - [ ] have a working version of npm and node `node -v` and `npm -v` should give version numbers
- [ ] FRONTEND
    - [ ] Let's use a generator to create the client folder. install [CRA](https://github.com/facebookincubator/create-react-app) with `npm i -g create-react-app`
    - [ ] CRA will create the folder, add the required packages and install everything to bootstrap. Use `create-react-app client` from this project's root.
    - [ ] navigate to the newly created folder and explore the react app. Run it with `npm start` to start a server and view it running live

- [ ] BACKEND
    - [ ] create a folder to handle the server code and dependencies (let's assume the folder is called `server`)
    - [ ] in the server folder, initiate you npm package with `npm init` as this will be usefull to register our third party modules we will be using (`npm init -y` allow to skip the questionning if you find that anoying).