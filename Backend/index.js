const express = require('express')
const dotenv= require('dotenv')
const cors= require('cors')
dotenv.config()
const app= express()
const PORT =process.env.PORT || 8000// middleware
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("I am comming from backend 😊!")
})



// import custom files
const connectDB = require('./Config/db')
const user = require('./Routes/userRoute')

connectDB()

// Routes
app.use('/api/user',user);




// routes




app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})