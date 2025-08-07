import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const PORT = process.env.PORT || 5001;

app.get("/",(req,res)=>{
    res.send("Its Working");
})


app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT: ${PORT}`)
}) 