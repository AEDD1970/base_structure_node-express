const express = require('express');
const mongoose = require('mongoose');
const app = express()
//call route
const user = require('./routes/user_route')


app.use(express.json());
app.use('/api/register', user);
//connection local-port
const port = process.env.PORT || 3001
app.listen(port, () => console.log('listening to the port:' + port));

//conexion base de datos
mongoose.connect('mongodb://localhost/api_store', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true
})

    .then(() => console.log('Connected to the database'))
    .catch(() => console.log('Mongo db connection failed'))
//end conexion
