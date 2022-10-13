const express = require("express");

const helmet = require("helmet");

const cors = require("cors");

const morgan = require("morgan");

const { dbConnection } = require("./dataBase/database");

const { routes } = require("./Router/allRoutes");

const environment = process.env.Node_Env || "development";

const Port = process.env.Port || 8000;

const app = express();

app.use(express.urlencoded({ extended: true })); //access to the form data

app.use(express.json()); //req.body

app.use(helmet());

// setting the environment to development
if ( app.get('env') === "development") {
    
    app.use(morgan('dev'))

};

// setting the cors globally and setting it origin to the require endpoint
app.use(cors({

    credentials: true,
    
    origin: 'http://localhost:3000' ||'https://restaurant-mangement.vercel.app/',

    methods:"post"
    
}));

app.use(routes);

app.listen(Port, () => {

    dbConnection();

    console.log(`server listening on: ${Port}`);
    
});