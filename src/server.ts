import app from './app'

app.listen(process.env.port || 3333,()=>{
    console.log("listering on port 3333")
})