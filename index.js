const express = require("express");
const app = express();

app.use(require("./db.js"));

app.get("/roster", require('./api/roster.js'));
app.get("/roster/day", require("./api/roster.day.js"));
app.get("/groups", require("./api/groups.js"));


app.listen(8080, () => console.log("Listening on 8080"));

module.exports = app;