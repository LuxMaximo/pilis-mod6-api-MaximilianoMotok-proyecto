const express = require('express')
const app = express()
const port = 3000

//app.use('/users', require(''));
app.use('/users', require('./src/routes/users.router'));
app.use('/events', require('./src/routes/events.router'));
app.use('/customers', require('./src/routes/customers.router'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))