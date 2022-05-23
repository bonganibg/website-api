const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routeProject = require('./routes/project');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var localDB = 'mongodb://localhost:27017/bonganibg-testing';

mongoose.connect(localDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("we are connected to the database");

    app.use("/api/projects", routeProject);
})
.catch(() =>{
    console.log("Not connected to database");
    console.log("error");
});

module.exports = app;
