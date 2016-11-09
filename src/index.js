import express from 'express';
import cors from 'cors'

import fioFinder from './task3/fioFinder'
var app = express();
app.use(cors());


app.get('/task2b', function (req, resp) {

  const params = req.query;
  let fullname = params.fullname;
  let result = fioFinder.doWork(fullname);
  resp.send(result);
});

app.listen(3000, function () {
  console.log('server started at 3000');
});
