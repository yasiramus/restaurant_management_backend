const cors = require("cors");

const express = require("express");

const helmet = require("helmet");

const morgan = require("morgan");

const { dbConnection } = require("./dataBase/database");

const { routes } = require("./Router/allRoutes");

// const environment = process.env.Node_Env || "development";

const Port = process.env.Port || 5000;

// const path = require("path");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true })); //access to the form data

app.use(express.json()); //req.body

app.use(helmet());

// setting the environment to development
if ( app.get('env') === "development") {
    
    app.use(morgan('dev'))

};

// setting the cors globally and setting it origin to the require endpoint
// app.use(cors({

//     credentials: true,
    
//     origin: 'http://localhost:3000',

//     methods:"POST"
    
// }));

// if (process.env.Node_Env === "production") {
    
//     app.use(express.static(path.join(__dirname, "../restaurant_management_frontend/build")));

//     app.get("*", (req, res) =>{

//         res.sendFile(path.resolve(__dirname, "../", "restaurant_management_frontend", "build", "index.html"))

//     })
// } else {
    
//     app.get("/", (req,res) => res.json("set to production"))
// }

app.use(routes);

app.listen(Port, () => {

    dbConnection();

    console.log(`server listening on: ${Port}`);
    
});