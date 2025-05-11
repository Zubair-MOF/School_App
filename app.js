const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts'); // Ensure this is required
const app = express();
const ejsmate = require('ejs-mate'); // Ensure this is required
const port = 7070;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts); // Use express-ejs-layouts middleware

// Set EJS as the templating engine and configure the layout
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set views directory
app.set('layout', 'layout/boilerplate');
app.engine('ejs', ejsmate);
// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Dashboard' });
});

app.get('/home', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.get("/student/index",(req,res)=>{
    res.render("students/index.ejs");
})

app.get("/student/create",(req,res)=>{
    res.render("students/create.ejs");
})

app.get("/student/edit",(req,res)=>{
    res.render("students/edit.ejs");
})

app.get("/student/show",(req,res)=>{
    res.render("students/show.ejs");
})

app.get("/student/ManageIndex",(req,res)=>{
    res.render("students/manageIndex.ejs");
})
// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});