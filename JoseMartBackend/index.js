require('dotenv').config()
const express = require("express");
const { default: mongoose } = require('mongoose');
const App = express();
const port = process.env.PORT;
const mongourl = process.env.MONGOURL


App.listen(port, () => {
    console.log(`server is running on this port ${port}`);
    mongoose.connect(mongourl).then(() => {
        console.log('mongodb is connect');
    }).catch((er) => {
        console.log(er);
    })
})