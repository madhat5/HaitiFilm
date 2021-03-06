# HaitiFilm

# goal-helper_app-MEAN - Final Project (MEAN)
---

Links:

- Project:
    - GitHub
        - https://github.com/madhat5/HaitiFilm
    - Wireframes
        - 
    - Trello link
        - https://trello.com/b/TkTNUmUm/haiti-moviedb
    - Heroku
        - 

---
Technical Requirements:

- 


---
Timeline goals:

- January --x--
    - Site planning
    - Basic MEAN
        - user auth

- February --ox--
    - CRUD
        - user movie list
        - user profile?
    - Update user auth
        - implement passport
    - user test

- March --o--
    - server launch
        - heroku to start? or aws free?
    - MVP
    - implement payment framework
    - user test

- April --o--
    - user test
    - design

- May --o--
    - user test
    - design

- June --o--
    - user test
    - design

- July --o--
    - user test
    - design

--
Deployment flow:

- Create development branch
    - from master
        - git checkout -b development       
- Pull @ beginning of day
    - from development
        - git pull origin master
        - (npm install) if needed
- Create 1 branch per file feature
    - from development
        - git checkout -b file_feature
- By end of day 
    - from branch
        - git add .
        - git commit -m "update details"
        - git push origin file_feature
        - (gitHub
            - Pull request)
        - OR
        - (git push origin development)
        - git checkout development
    - from development
    - (gitHub
        - Pull request)
    - OR
    - (git push origin master)


---
MVP

Models:

- user
    - email: string
    - password: string?
    - my_List: array (of movies)

- movie
	- title: string
	- description: string
	- rating: integer
	- tags: array (of strings?)

User story: 

- landing page:
    - log in button
        - > opens login form (passport?) as modal
    - register form + register buton
    - random movie highlight?
    - carousel: movies lists


+features:

- 

---
---
App Build Steps:

- touch server.js --x--

- npm init --x--
	-'enter' through all the prompts

- packages setup --x--
	- npm install --save express morgan mongoose cookie-parser body-parser md5
	- server.js
		- dependecies
			- var express = require('express'),
			- logger = require('morgan'),
			- mongoose = require('mongoose'),
			- cookieParser = require('cookie-parser'),
            - bodyParser = require('body-parser'),
            - expressSession = require('md5');
		- express
			- var app = express();
		- middleware
			- app.use(logger('dev'));
			- app.use(cookieParser());
            - app.use(bodyParser.urlencoded({ extended: true}));
            - app.use(bodyParser.json());
		- mongo
			- mongoose.connect('mongodb://localhost/db_name');

- app port & listener --x--
	- server.js
		- var port = process.env.PORT || 3000;
		- app.listen(port);
		- console.log('Silence please...' + '\n' + 'Curtains up...' + '\n' + 'Server started on: ' + port);

- test connection --x--
    - setup basic test route
    - launch server (nodemon)

- safety --x--
    - touch .gitignore 
    - add:
        - node_modules

- mkdir public --x--
	- server.js
		- app.use(express.static('public'));
	- touch public/index.html
	- touch public/app.js
	- touch public/style.css

- test connection --x--
    - setup basic test route
    - setup basic test index.html/app.js
    - launch server (nodemon)

- models build --x--
    - mkdir models
    	- touch models/user.js
    - server.js
    	- var User = require('./models/user.js');
    - user.js
		- var mongoose = require('mongoose'),
		- var userSchema = new mongoose.Schema({ ... });
		- var User = mongoose.model('User', userSchema);
		- module.exports = User;

- user auth build --x--
	- server.js
		- create register
		- create login/user info
		- logout?
	- CURL test
		- register: curl -X POST -d '{"username": "test@test.com", "password": "test"}' http://localhost:3000/users
		- login: curl -X POST -d '{"username": "test@test.com", "password": "test"}' http://localhost:3000/login

- Basic Story build --ox--
    - public/index.html
    	- CDN
			- js-cookie
				- <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.0.4/js.cookie.js"></script>
		    - angular
		    	- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		    - bootstrap
		    	- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
		    	- html build
    - public/app.js
        - public/index.html
            - link app.js to index.html
    	- angular build
    		- user auth
    			- build around ngshow (if user true, show all, else (please login))
    		- goal CRUD controller
    		- goal.step CRUD controller
    		- user controller
    - public/style.css
		- bootstrap

- models build --o--
    - server.js
		- var Goal = require('./models/goal');
		- var Step = require('./models/step.js')
    - goal.js
        - var mongoose = require('mongoose');
        - var goalSchema = new mongoose.Schema({ ... });
        - var Goal = mongoose.model('Goal', goalSchema);
        - module.exports = Goal;
    - step.js
        - var mongoose = require('mongoose');
        - var stepSchema = new mongoose.Schema({ ... });
        - var Step = mongoose.model('Step', stepSchema);
        - module.exports = Step;
    - server.js
    	- Goal CRUD
    	- Step CRUD

- Heroku --o-- (OR AWS?)
	- heroku create
	- touch Procfile
	- Profile
		- web: node app.js
	- npm install -g foreman
	- server.js
		- var mongoUri =  process.env.MONGOLAB_URI || 'mongodb://localhost/jmnyGoals';
		- mongoose.connect(mongoUri);
	- git push heroku master
	- heroku open


---
---
Features/ToDo

- category carousel --o--
    - create + load seperate html pages for each category 
    - each page is a new carousel for category
- navbar --ox--
    - make static-top
- login page functionality --ox--



---
---
Bugs

- logout --ox--
- fix Login/Register buttons (free access right now) --x--?
- user auth --o--
    - fix 'undefined registered'
- carousel --o--
- carousel partials
- ng-include --o--
    - for movie navigation (https://docs.angularjs.org/api/ng/directive/ngInclude)

---
---
Reference

- Git merging
    - https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d02/INSTRUCTOR/git_solo.md
	
- Heroku
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d04/INSTRUCTOR/heroku.md

- Embedding/referencing:
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d01/INSTRUCTOR/%5Ba1%5Dmongo.md
	- https://github.com/ga-students/wdi_lettuce_students/blob/master/w08/d01/INSTRUCTOR/%5Bb1%5Dmongoose_data_modeling.md

- Bootstrap
	- http://www.tutorialrepublic.com/twitter-bootstrap-tutorial/
    - carousel
        - https://getbootstrap.com/examples/carousel/
        - http://getbootstrap.com/javascript/#carousel
    - navbar
        - http://getbootstrap.com/components/
        - https://getbootstrap.com/examples/navbar-fixed-top/
        - http://v4-alpha.getbootstrap.com/components/navbar/
    - login page
        - http://bootsnipp.com/snippets/featured/login-and-register-tabbed-form

- Angular:
	 if/else
		- https://docs.angularjs.org/api/ng/directive/ngSwitch
		- http://stackoverflow.com/questions/15810278/if-else-statement-in-angularjs-templates
	- hide/show
		- https://scotch.io/tutorials/how-to-use-ngshow-and-nghide
    - debug
        - http://stackoverflow.com/questions/31445470/angularjs-stopped-working

- Misc
	- CSS colors:
		- https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/
		- http://stackoverflow.com/questions/23201134/transparent-argb-hex-value
	- Mongo commands:
		- https://docs.mongodb.org/manual/reference/mongo-shell/




---
---
Comments/Notes:

- gui
    > Use final project for movie displays --ox
        - movie genres part of movie model
        _ Movie CRUD mostly for Favorites list
    > Use final project for navbar --ox
    > Use porfolio for carousel --ox
    > SEED TEMP MOVIE DATA
    > search --o
- setup movie model --x
    - action, adventure, comdedy, crime, drama, historical, horror, mystery, romance, science fiction, animation/cartoon, music video, favorites + recently added

