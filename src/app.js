const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

// Get all the routes
const userRoute = require("../routes/user")
const RoomRoute = require("../routes/Room")
const BookingRoute = require("../routes/Booking")

// create express app
const app = express();

app.use(express.static(path.join(__dirname, "../dist")))
// use middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

// use all routes
app.use("/api", userRoute)
app.use("/api", RoomRoute)
app.use("/api", BookingRoute)
// setting headers for all route
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

app.disable("etag")
// set up default mongoose connection
const mongoDB = require('../config/key').mongoURL
mongoose.connect(mongoDB, {useNewUrlParser: true})
  .then(()=>{
    console.log("mongodb connected")
  })
  .catch((eer) => {
    console.log("error connecting to mongodb")
  })

  app.get("*", (req, res)=> {
    res.sendFile(path.join(__dirname, "../dist", "index.html"))
  })

// Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
//Get the default connection
// var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
// db.on('e/rror', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function () {
  // console.log('connected to mogndb')
// });

const port = process.env.PORT || 3030;

app.listen(port, ()=> {
    console.log(`connected to port ${port}`)
})