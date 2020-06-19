console.log('Hello World')
const express = require('express');

const app = express();

app.get('/', function(req, res)
{
    res.send('Hello World Two');
});

app.listen(3000, function()
{
    console.log('Server started on port 3000');
});
/*

Note: You may use "npm start" in git bash to run file app.js
        but for "start:" it has to written correctly i.e.
        node app and not node apppp. It seems that start types
        into the CMD. 

*/