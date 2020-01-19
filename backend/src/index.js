const express= require('express');
const mongoose= require('mongoose');
const routes=require('./routes');

const app= express();

//conexão com o Mongo DB
mongoose.connect('mongodb+srv://hanz0u:Juninho123@@cluster0-kwlnu.mongodb.net/db?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// comunicação json com a aplicação
app.use(express.json());
app.use(routes);


app.listen(8999);