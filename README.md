# Instructions to run project

## Create env.js file

This env was created to use the Github Api Key so calls to the API won't be limited, you can get yours from here: [Github Settings](https://github.com/settings/tokens)

⚠️ After this step add your Github Api Key to env.js ⚠️

````
cd app && cp env.example.js env.js
````

## Install dependencies
````
cd .. && yarn install
````
or
````
cd .. && npm install
````

## Start application
````
yarn start
````
or
````
npm run start
````

## Run tests
````
yarn test-single-run
````
or
````
npm run test-single-run
````

# Followers

* Create a small Angular.js application that fetches users from github's public api and displays a user's followers.
* Use Angular.js version 1.5 or higher (already included in this repo, don't use Angular 2 ;))
* Make a user interface that is friendly and functional (use whatever libraries you want, bootstrap is included in this repo)

# Requirements

* Clone this git repo and create a branch that you will build your version of the application on. (please commit often to display the steps taken while building the application)
* When a user first comes to the page a list of users from github should be shown. (no need for pagination, just grab the first batch)
* A user should then be able to click on a user and have that users followers fetched and displayed in some way.
* A user should also be able to go back to the original state of the page. (just the list of github users)
* Try to use a component based architecture utilizing angular components that were introduced in Angular 1.5. [Docs](https://code.angularjs.org/1.5.3/docs/guide/component)
* Feel free to use es2015(es6) features supported by the latest chrome browser.
* When finished please make a pull request back to this repository through github.

# Reference

* [Github API Docs](https://developer.github.com/v3/)
* [Angular 1.5 Docs](https://code.angularjs.org/1.5.3/docs/guide)







