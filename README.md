# Eat Da Burger!
A Burger Eatin' Application with Node.js/Express/MySQL2/Sequelize/Handlebars/Bootstrap
## Description
This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and styling from the Bootstrap framework, and the backend implemented using Node.js and Express. The database connection is made using Sequelize. The templating for HTML is accomplished by using Handlebars.

The user is instructed to enter a user name and a burger name, and then click "Submit" to add the burger to the menu list. This user entry also gets added to the mySQL database, thus providing persistent data. The "name" and "burger" fields are required, and are validated in the corresponding sequelize models. The initial burger entry is populated into the "available" column at the left side of the screen. The user may then "eat" any burger by clicking the corresponding "DEVOUR IT button, which populates changes in the database, redirects the view to the initial state, which then reads, sorts, and displays the data according to the stored boolean value in the database. A input field sits to the left of the "DEVOUR IT" button, which will store a "name" input and associate it with the burger.  The now "eaten" burger will be displayed in the "devoured" column on the right, along with the user name who created the burger, and the user who "DEVOURED IT" if the field was provided.
## Demo
The demo link can be accessed by clicking [here](https://dashboard.heroku.com/apps/eat-da-burger-sqlize-cj).
## Installation
**Note: you must have mySQL installed in order to run this application.**

To run the application locally, first clone this repository with the following command:
```
git clone https://github.com/chrisjones0517/burger.git
```
Next, navigate to the burger folder and install the application dependencies:
```
npm install
```
Next, run ```sequelize init``` from the command line (sequelize-cli must be installed globally ```npm install sequelize-cli -g```):

Then, you will want to create a local database for testing and development. Later you can create a production database using a mySQL database service, such as JawsDB.

Then, you will want to view the config.json file, which will be inside of the config folder that was created after running the "initialize" commmand. You will change the properties and values here for the "development" connection info.

Then, you can create the model and migration files from the command line by running ```model:generate --name burger --attributes burger_name:string,devoured:boolean,createdBy:string,eatenBy:string``` followed by ```model:generate --name customer --attributes name:string,burgers_eaten:string,burgers_created:string``` 

Finally, run the node server locally:
```
node server.js
```
The view should now be available in your browser at the URL: ```http://localhost:3000```.

**Have fun!**
