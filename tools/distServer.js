import express from 'express';
import path from 'path';
import open from 'open';
import cors from 'cors';
const port = 3000;
const app = express();
app.use(cors())
app.use(express.static('dist'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});