
const express=require("express");
const app=express();
const fs=require("fs");

const port = 4200;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create', (request, response) => {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
 // const time=date.UTCtoString.slice(0,-3);
 var content = "Current timestamp is " + date + "\n";
 content += "If you want time in hours, minutes, and seconds, then it is " + hours + " hours " + minutes + " minutes and " + seconds + " seconds.\n";
 console.log(date,hours,minutes,seconds)
  var dateTime = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}-${new Date().getHours()}-${new Date().getMinutes()}-${new Date().getSeconds()}`;

  fs.writeFile(`date-time.txt`, content, (err) => {
    if (err) console.log(err);
    else console.log('success');
  });
  response.send('files created');
});

app.get('/files', (request, response) => {
    const filePath = `${__dirname}/date-time.txt`;
  
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.log("Cannot read file");
        response.status(500).send("Internal Server Error");
        return;
      }
  
      response.send(data);
    });
  });
  
  
  

app.listen(port, () => {
  console.log(`The Server Started at the port :  ${port}`);
});

