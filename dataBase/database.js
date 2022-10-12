const mongoose = require("mongoose");

require("dotenv").config();

exports.dbConnection = () => {
    
    const { env } = process;

    mongoose.connect(env.mongoDbUrlConnection, {
      
        useNewUrlParser: true,
        
        useUnifiedTopology: true,
      
    }).then(success => {

        if (success) {
          
            console.log("mongodb connection has been established successfully");
            
        }
        
    })
    .catch(err => console.log(err.message));
}
