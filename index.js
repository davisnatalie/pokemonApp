// 0. Starter code - Modules

const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");
const methodOverride = require("method-override")

//Database connection
const connectToMongoDB = require("./database/mongodb");

//Middleware

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views/"));
app.use(express.static(path.join(__dirname, "./public/")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger("dev"));

//Import method override
app.use(methodOverride('_method'));

//Import the router file
const viewRouter = require("./routes/client/viewRouter")

app.use("/", viewRouter)

//Import the Pokemon router

const pokemonRouter = require("./routes/api/pokemonRouter")

app.use("/api/pokemon", pokemonRouter)


//Starter code - Server start

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server is on port ${PORT}...`)
   
    connectToMongoDB();
});