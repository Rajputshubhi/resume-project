import express from 'express';
const app=express()
const port=process.env.PORT || '4000'
import web from "./routes/web.js"

app.set('view engine','ejs')
app.use('/',web)
app.use(express.static('public'))

app.listen(port,()=>{
     console.log(`server started is host http://localhost:${port}`)
})