import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    talle: { type: String, required: true },
    imagen: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
