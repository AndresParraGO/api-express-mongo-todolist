

const mongoose = require('mongoose')


// Connect DB
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Connect')
  } catch(err) {
    console.log(err)
    console.log('Hubo un error')
  }
}
