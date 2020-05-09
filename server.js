const express = require("express");
const path = require("path");
const Customer = require("./Customer.js");


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

let person = new Customer ("Connor", 46465465, "123@hotmail.com", 8484);

let bookTables = [];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Hot-Restaurant/home.html");
});

app.get("/api/tables", (req, res) => {
    res.json(bookTables);
});

app.post("/api/tables", (req, res) => {
    const newCustomer = req.body;
    bookTables.push(newCustomer);
    res.json(bookTables);
});

app.get("/api/waitlist", (req, res) => {
    res.json(person);
});

app.listen(PORT, () => {
    console.log(`Server is listening http://localhost:${PORT}`);
});