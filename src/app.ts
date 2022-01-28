import express from 'express'
import user from './routes/user'
import login from './routes/login'
import task from './routes/task'
import adm from './routes/adm'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import { createConnection } from 'typeorm';
import "reflect-metadata";

createConnection().then(() => {
    
    // create express app
    const app = express();
        
    app.use(express.json())
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))

    app.use(user)
    app.use(login)
    app.use(task)
    app.use(adm)
    
    

    app.listen(process.env.port || 3333,()=>{
        console.log("listering on port 3333")
    })

})
