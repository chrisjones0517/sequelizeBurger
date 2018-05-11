# Eat Da Burger!
A Burger Eatin' Application with Node.js/Express/MySQL2/Sequelize/Handlebars/Bootstrap
## Description
This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and styling from the Bootstrap framework, and the backend implemented using Node.js and Express. The database connection is made using Sequelize. The templating for HTML is accomplished by using Handlebars.

The user is instructed to enter a user name and a burger name, and then click "Submit" to add the burger to the menu list. This user entry also gets added to the mySQL database, thus providing persistent data. The "name" and "burger" fields are required, and are validated in the corresponding sequelize models. The initial burger entry is populated into the "available" column at the left side of the screen. The user may then "eat" any burger by clicking the corresponding "DEVOUR IT button, which populates changes in the database, redirects the view to the initial state, which then reads, sorts, and displays the data according to the stored boolean value in the database. The now "eaten" burger will be displayed in the "devoured" column on the right.
## Demo
The demo link can be accessed by clicking [here](https://chrisjones-eat-da-burger.herokuapp.com/).
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
Next, populate the connection.js file with your local mySQL setting information:
```
const connection = mysql.createConnection({
    host: yourHost,
    user: yourUserName,
    password: yourPassword
    (you will add a [database: yourDatabase] after setup)
});
```
Then, run the schema.sql file from the command line using your installed mySQL Server. Alternatively, you can copy the commands from the file to run in your mySQL GUI, such as mySQL Workbench.  

Finally, run the node server locally:
```
node server.js
```
The view should now be available in your browser at the URL: ```http://localhost:3000```.

**Have fun!**
