
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const app = express();

app
  /*.use(express.static(path.join(__dirname, 'public')))*/
  .use(express.static(path.join(__dirname, '/public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/projects', (req, res) => res.render('pages/projects'))
  .get('/about', (req, res) => res.render('pages/about'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .get('/inquire', (req, res) => res.render('pages/inquire'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
