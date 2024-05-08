// In src/index.js 
const express = require("express");
const v1Router = require('./route')
const connectDB = require('./utilis/db')
const authRoutes = require('./route/auth')

const app = express();
const PORT = process.env.PORT || 3000;


connectDB()
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/", v1Router);


app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});