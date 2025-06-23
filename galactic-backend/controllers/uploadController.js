import fs from 'fs';
import cloudinary from '../config/cloudinary.js';

export const uploadImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file provided' });
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'galactic-worldd'
    });
    fs.unlinkSync(req.file.path);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
