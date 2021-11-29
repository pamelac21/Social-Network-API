const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

/*
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/18-socialnetapi', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/18-socialnetapi',
  async(err)=>{
      if(err) throw err;
      console.log("conncted to db")
  }
)

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

// http://localhost:3001/