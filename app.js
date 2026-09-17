const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <h1>QA Login Application</h1>
        <input type="text" placeholder="Username">
        <br><br>
        <input type="password" placeholder="Password">
        <br><br>
        <button>Login</button>
    `);
});

server.listen(3000, () => {
    console.log('Application running on port 3000');
});