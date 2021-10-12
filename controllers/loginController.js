const path = require("path");


const createPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`);
//For Register Page
const registerView = (req, res) => {
    res.render(createPath('register'))
}

// For View 
const loginView = (req, res) => {
    res.render(createPath('login'))
}

module.exports = {
    registerView, 
    loginView
}