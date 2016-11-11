import express from 'express';
import cors from 'cors'

import fioFinder from './task3/fioFinder'
import summerAB from './task2/summerAB'

var app = express();
app.use(cors());


app.get('/task2b', function (req, resp) {

  const params = req.query;
  let fullname = params.fullname;
  let result = fioFinder.doWork(fullname);
  resp.send(result);
});

app.get('/task2a', function (req, resp) {
  const params = req.query;
  let result = summerAB.doWork(params);
  resp.send(result);
});


app.listen(3000, function () {
  console.log('server started at 3000');
});
