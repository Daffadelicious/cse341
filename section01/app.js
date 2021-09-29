const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.url;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>');
        res.write('<body><h1>Username:</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users'){
        res.write('<html><head><title>List of Users</title></head>');
        res.write('<body><ul>');
        res.write('<li>User 1</li><li>User 2</li><li>User 3</li><li>User 4</li>');
        res.write('</ul></body>');
        res.write('</html>');
    }
    if (url === '/create-user'){
        const body = [];
        req.on('data', (chunk) =>{
            // console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
            // const message = parsedBody.split('=')[1];
            // fs.writeFile('message.txt', message, (err) => {
            //     res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();
            // });
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});

server.listen(3000);