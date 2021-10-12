const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = require('./routes/login');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(PORT, () => {
    console.log("Server is starting for port: " + PORT);
});
