import express from "express";
import dotenv from "dotenv";

// intilaize app
const app = express();

// setup port
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('Server is running !!!')
})

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})