const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require("./db/activities");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/activities", async (req,res) => {
    const results = await db.createActivity(req.body);
    res.status(201).json({id: results[0]});
})

app.get("/activities", async (req, res) => {
    const activities = await db.getAllActivities();
    res.status(200).json({activities});
})

app.get("/api", (req, res) => {
    res.json(
        {
        "activities": [
            {
                "ID": 1,
                "title": "Writing code",
                "start" :  "Tue Apr 26 2022 20:00:15 GMT+0200 (Centraleuropæisk sommertid)",
                "end":  "Tue Apr 26 2022 20:06:15 GMT+0200 (Centraleuropæisk sommertid)"
            },
            {
                "ID": 2,
                "title": "Writing code again",
                "start" :  "Tue Apr 26 2022 20:07:15 GMT+0200 (Centraleuropæisk sommertid)",
                "end":  "Tue Apr 26 2022 20:10:15 GMT+0200 (Centraleuropæisk sommertid)"
            },
        ]
    })
})

app.listen(5000, () => {console.log("Server started on port 5000")})