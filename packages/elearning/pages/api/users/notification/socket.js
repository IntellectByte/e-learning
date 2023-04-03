import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000';

export default function handler(req, res) {
    const socket = socketIOClient(ENDPOINT);

    socket.emit('notification', {
        message: 'Hello, world!',
    });

    socket.disconnect();

    res.status(200).json({ message: 'Notification sent' });
}