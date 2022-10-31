const con = require("/connection");
const express = require("express");
const app = express();
app.use(express.json());
const port = 5000

app.get("/", (req, res) => {
    con.query("select *from  students ", (err, result) => {
        if (err) {
            res.send("Error");
        } else {
            res.send(result);
        }
    });
});
app.post("/", (req, res) => {
    console.log("post api working");
    con.query("insert into products set ", (err, result) => {
        if (err) {
            res.send("Error");
        } else {
            res.send(result);
        }
    });
});
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})