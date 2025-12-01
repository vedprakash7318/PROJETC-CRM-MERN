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
const country = require('./Routes/countryRoute')
const state = require('./Routes/stateRoute')
const city = require('./Routes/cityRoute')
const service = require('./Routes/servicesRoute')
const createFollowUpStatus = require('./Routes/followUpStatusRoute')
const source = require('./Routes/sourceRoute')
const priority = require('./Routes/priorityRoute')
const tag = require('./Routes/tagRoute')

const lead = require('./Routes/leadRoute')


connectDB()
// Routes
app.use('/api/user',user);
app.use('/api/country',country);
app.use('/api/state',state);
app.use('/api/city',city);
app.use('/api/services',service)
app.use('/api/status',createFollowUpStatus)
app.use('/api/tag',tag)
app.use('/api/source',source)
app.use('/api/priority',priority)
app.use('/api/lead',lead)




// routes




app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})