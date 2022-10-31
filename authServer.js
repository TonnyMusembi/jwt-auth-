require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.TOKEN_SERVER_PORT;

app.listen(port, () => {
    console.log(`Authorization Server running on ${port}...`);
});

const bcrypt = require("bcrypt");
const users = [];

app.post("/createUser", async(req, res) => {
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({ user: user, password: hashedPassword });
    res.status(201).send(users);
    console.log(users);
});