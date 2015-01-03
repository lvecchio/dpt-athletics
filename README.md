dpt-athletics
===========

#Installation

## Prerequisites

- Make sure you have ruby and compass installed.
- `sudo gem install compass`

## Install
1. `npm install`
2. `bower install`

## Start Server
` grunt serve `

#Architecture Overview
## Level 1

- 'bower_components': all files used by bower, managed by bower.js
- 'dist': files for production
- 'documentation': javascript documentation dynamically created by Grunt
- 'node_modules': all files used by node, managed by package.json
- 'src' : all source files for the application

## Level 2 - src
- 'app': contains all application javascript & html (views, controllers, directives, factories, services, etc)
- 'assets': all supporting assets (css, sass, images, fonts, etc)

## Level 3 - app

### app.module.js
Handles the setup of the app, loads the AngularJS dependencies

### app.route.js
Handles all the routes and the route configuration


#Coding Guidelines

## Directives
Custom directives should be prefixed with "dpt"

## Controllers

## Services

## Views



