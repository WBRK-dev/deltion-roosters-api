const express = require("express");
const app = express();

app.get("/roster", require('./api/roster.js'));

app.listen(8080, () => console.log("Listening on 8080"));

module.exports = app;