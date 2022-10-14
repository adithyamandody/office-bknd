const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const port = 8009;

dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
const addPartys = require('./routes/addpartys');
const addDelivery = require('./routes/addDelivery');
// const { options } = require('./routes/addpartys');
const addSales = require('./routes/addsales');
const addReciept = require('./routes/addReciept');
const addArea = require('./routes/addArea');
const product = require('./routes/addProduct');

mongoose.connect(
  process.env.DB_CONNECT,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log('mongdb is connected');
  }
  // () => console.log('connected to db!')
);

app.use(express.json());
app.use(cors());
app.use('/api', addPartys);
app.use('/api', addSales);
app.use('/api', addReciept);
app.use('/api', addDelivery);
app.use('/api', addArea);
app.use('/api/', product);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
