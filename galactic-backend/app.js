import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/productos', productRoutes);
app.use('/api/upload', uploadRoutes);

export default app;
