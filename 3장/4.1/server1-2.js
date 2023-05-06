const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8088, () => {
    console.log('8088번 포트에서 서버 연결 중');
});
http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})
.listen(8089, () => {
    console.log('8089번 포트에서 서버 연결 중');
});