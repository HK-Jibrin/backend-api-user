const express = require("express")
const app = express();
const user = require('./user.json')

app.get("/api/user", (req, res) => {
    res.send(user)
});

app.listen(3000, () => {
    console.log('server listening on port 3000')
});