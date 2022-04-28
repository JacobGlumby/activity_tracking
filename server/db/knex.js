const knex = require("knex");

/*
Database agnostic module that serves as an abstraction layer between the application and the database 
Eliminates the need to take actions in order to prevent sql injections.
*/

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "tracker.sqlite3"
    }
});

module.exports = connectedKnex;