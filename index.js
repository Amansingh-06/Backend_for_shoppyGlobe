const express = require("express"); //
const connectDb = require('./config/db.js');
const router = require("./routes/ProductRoutes.js");
const Cartrouter = require('./routes/CartRoutes.js')
const registerRoutes = require('./routes/authRoutes.js')

const app = express(); // using express
connectDb();//connect to database

app.use(express.json());//middleware


//Routing
app.use('/api', router);
app.use('/api', router);
app.use('/api', router);
app.use('/cart/li', Cartrouter);
app.use('/cart', Cartrouter);
app.use('/cart', Cartrouter);
app.use('/user', registerRoutes)
app.use('/user', Cartrouter)
app.use('/user',registerRoutes)

//creating server
app.listen(3000, () => {
    console.log("Server is created");
});
