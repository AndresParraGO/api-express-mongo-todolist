

const express = require('express')
const cors = require('cors')
const app = express()


app.set('port', process.env.PORT || 3000)

// database
const db = require('./config/database')
db()

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



// Routes
app.use(require('./routes/router'))



// Listen
app.listen(app.get('port'), () => {
  console.log(`Server listen in http://localhost:${app.get('port')}`)
})

