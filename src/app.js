const express = require("express")
const app= express()

app.use("/test",(req,res)=>{
    res.send("how are you")
})

app.use("/hello",(req, res)=>{
    res.send("hdfhagddfhjkdvbvguy")
})
app.listen(7778,()=>{
    console.log("sucessfully listening on port 3090")
})