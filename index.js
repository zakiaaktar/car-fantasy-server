const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;


// middlewares
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
    res.send('CAR FANTASY server is running');
  });
  
  app.listen(port, () => {
    console.log(`CAR FANTASY server running on ${port}`);
  })