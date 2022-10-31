const con = require("/connection");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    con.query("select *from  students ", (err, result) => {
        if (err) {
            res.send("Error");
        } else {
            res.send(result);
        }
    });
    app.post('/', (req, res) => {
        console.log("post api working")
    })
});