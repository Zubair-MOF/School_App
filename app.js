const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const ejsmate = require('ejs-mate');
const method = require('method-override');


const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const subjectRoutes = require('./routes/subjectRoutes');
const classroomRoutes = require('./routes/classroomRoutes');
const curriculumRoutes = require('./routes/curriculumRoutes');

const port = 7070;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.use(method('_method'));

// Set EJS as the templating engine and configure the layout
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout/boilerplate');
app.engine('ejs', ejsmate);


// Dashboard page route
app.get('/', (req, res) => {
    res.render('index', { title: 'Dashboard' });
});

app.get('/home', (req, res) => {
    res.render('index', { title: 'Home' });
});

//routes 
app.use('/student', studentRoutes);
app.use('/teacher', teacherRoutes);
app.use('/subject', subjectRoutes);
app.use('/classroom', classroomRoutes);
app.use('/curriculum', curriculumRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});