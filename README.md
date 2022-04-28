# activity_tracking
 React express app

# Prerequisites 
Sqlite is needed for this project : https://www.sqlite.org/download.html

# How to run 
Install node modules in server and client folders. 

Run server by running command: npm run dev  
Run client by running command: npm start

# Stack
The tech stack is the following: 
- React frontend 
- Epress backend 
- Sqlite database

# Packages
Packages installed in the frontend: 
- Axios: to help send requests to the backend. 

Packages installed in the backend: 
- Nodemon: restarts server everytime update has been made to server files.
- Knex: Database agnostic module that serves as an abstraction layer between the application and the database 
- sqlite3: driver to connect to sqlite db. 

# Frontend
Frontend consists of 3 components. 
- Timer 
- ActivityList 
- Activity

The Timer component creates the date objects for start time and end time. It handles the displaying of the actual timer that updates every second. Once an activity has been ended, it posts the activity to the backend. 

The Activitylist serves as a component that holds all the activities. It gets all activities on pageload, and is updated, everytime a new activity is added. 

The activity displays all the data of the activities. 

# Backend 
Simple backend that contains one endpoint that can handle post and get request. 
Knex is used to simplify the database queries.



# DB 
Table can be created with following statement

CREATE TABLE "activities" (
	"id"	INTEGER,
	"title"	TEXT,
	"start"	TEXT,
	"end"	TEXT,
	"time"	TEXT,
	PRIMARY KEY("id" AUTOINCREMENT)
)
