import { Server } from 'socket.io';
import http from 'http';

const ioHandler = (req, res) => {
    if (!res.socket.server.io) {
        const httpServer = http.createServer((_req, _res) => {
            _res.writeHead(200, {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
                'Access-Control-Allow-Headers':
                    'Origin, X-Requested-With, Content-Type, Accept',
            });
            _res.end('hello');
        });
        const io = new Server(httpServer, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST'],
                credentials: true,
            },
        });
        res.socket.server.io = io;
        httpServer.listen(3000, () => {
            console.log('Socket.IO server listening on port 3000');
        });
    } else {
        console.log('Socket.IO server already running');
    }
    res.end();
};

export default ioHandler;
