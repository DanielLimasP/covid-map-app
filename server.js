// Inits
const express = require('express')
const exhbs= require('express-handlebars')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000

// Settings
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
// Routes
const map = require('./routes/map-routes')
app.use('/', map)
// Static files
app.use(express.static(path.join(__dirname, 'public'))) 
//Server Initialize
app.listen(port, ()=>{
    console.log('App running on PORT ', port)
})