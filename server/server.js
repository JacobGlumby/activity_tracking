const express = require('express');
const app = express();
const db = require("./db/activities");

app.use(express.urlencoded());
app.use(express.json());

app.post("/activities", async (req, res) => {
    try {
        const results = await db.createActivity(req.body);
        res.status(201).json({ id: results[0] });
    } catch (error) {
        res.status(500).json({error: error})
        //TODO: some sofisticated error handeling
    }
})

app.get("/activities", async (req, res) => {
    try{
    const activities = await db.getAllActivities();
    res.status(200).json({ activities });
    } catch (error) {
        res.status(500).json({error: error})
        //TODO: some sofisticated error handeling
    }
})


app.listen(5000, () => { console.log("Server started on port 5000") })