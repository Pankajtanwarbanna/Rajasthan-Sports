var express = require('express');
var app = express();
// Serve static files
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/app/views/index.html')
});

app.listen(8000, function () {
    console.log('Server running at 8000.')
});
