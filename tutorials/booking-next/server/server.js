import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const morgan = require('morgan');
import fs, { readdirSync } from 'fs';
// import router from './routes/auth'

require('dotenv').config();

const app = express();

// db
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true,useNewUrlParser: true })
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB error: ', err))

// middleware
app.use(cors())
app.use(morgan('dev'))

// routes
readdirSync('./routes').map((r) => app.use('/api',  require(`./routes/${r}`)))


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`))