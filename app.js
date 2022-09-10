const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost/CBIT'
const app =express()
mongoose.connect(url, {useNewUrlParser:true})

const con=mongoose.connection
con.on ('open',function(){
    
    console.log("hello")
})
app.use(express.json())
const r1=require('./route/route')
app.use('/FSD160120771302',r1)
app.listen(9000,()=>{
    console.log("server connected")
})








