const mongoose = require('mongoose');
const URI = 'mongodb+srv://cesaroet:senha@cluster0.cqf9qjg.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false)
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Banco rodando!'))
    .catch((err) => console.log(err));