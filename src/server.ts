import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { mainRouter } from './routes/main.routes';
import { adminRoutes } from './routes/admin.routes';
import { authRoutes } from './routes/auth.routes';

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));

server.use('/api', mainRouter);
server.use('/api/admin', adminRoutes);
server.use('/api/auth', authRoutes);

server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});