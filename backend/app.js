import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//config env 
import 'dotenv/config'

//routes
import authRoute from './routes/authRoute.js'

import errorHandler from './error/errorHandler.js'
import connectDatabse from './config/database.js'

const app = express()


//enabling cors
app.use(cors())


   // body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//database connection
connectDatabse()

//api
app.use('/api/auth',authRoute)

app.use((req,res)=>{
    res.status(404).json({ success : false , status: 404, message:"Not Found"})
})

// error handler
app.use(errorHandler);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});