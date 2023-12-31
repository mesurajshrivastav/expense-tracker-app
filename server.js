const express = require('express');
const dbConnect = require('./dbConnect');
const app = express();
app.use(express.json());
const path = require('path');
const userRoute = require('./routes/usersRoute');
const transactionsRoute = require('./routes/transactionsRoute');





app.use('/api/users/', userRoute);
app.use('/api/transactions/', transactionsRoute);

//static files
app.use(express.static(path.join(__dirname, './client/build')))

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname, './client/build/index.js'));
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node JS Server started at port ${port}!`));
