const express = require('express');
const path = require('path');
const csv = require('csvtojson');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!!req.file && !! req.file.path) {
    csv().fromFile(req.file.path)
      .then((jsonObj) => {
        return res.json({fileName: req.file.originalname, data: jsonObj})
      })
  }
})

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('app is listening on port ' + port);