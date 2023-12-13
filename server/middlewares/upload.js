import multer  from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary  from 'cloudinary';

cloudinary.config({
  cloud_name: 'dmsj5goq0',
  api_key: '643116438596735',
  api_secret: 'qdA8yr-4Yb-IcAvFRVx8YUS5rBM',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'jpg', // or any desired format
  },
});


 const upload = multer({ storage: storage });
 export default upload;