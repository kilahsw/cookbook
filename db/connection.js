///////////////////////////
// Environmental Variables
///////////////////////////
require("dotenv").config();

/////////////////////////////////////
// MONGOOSE CONNECTION
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cookbooks_db',
    { useNewUrlParser: true, useUnifiedTopology: true },
)
mongoose.Promise = Promise

module.exports = mongoose

/////////////////////////////////////
// const { MONGODBURI } = process.env;
// const mongoose = require("mongoose");
// const config = { useUnifiedTopology: true, useNewUrlParser: true };
// const DB = mongoose.connection;

// mongoose.connect(MONGODBURI, config);

// DB.on("open", () => console.log("You are connected to Mongo"))
//     .on("close", () => console.log("You are disconnected to Mongo"))
//     .on("error", (err) => console.log(err));

// mongoose.Promise = Promise








// const { MONGODBURI } = process.env;
// const mongoose = require('mongoose');
// const { config } = require("dotenv/types");

// mongoose.connect('mongodb://localhost/cookbooks_db', {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })

// mongoose.connect(MONGODBURI, config)



// module.exports = mongoose
