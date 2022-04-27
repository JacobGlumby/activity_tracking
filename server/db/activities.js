const knex = require("./knex");

function createActivity(activity){
    return knex("activities").insert(activity);
}

function getAllActivities(){
    return knex("activities").select("*").orderBy('id', 'desc');
}

module.exports = {
    createActivity,
    getAllActivities
}