import { Router } from "express";
import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from "../controllers/photo.controller";
import multer from "../libs/multer";

const router=Router();

router.route('/photos')
.get(getPhotos)
.post(multer.single('image'),createPhoto)

router.route('/photos/:id')
.put(updatePhoto)
.delete(deletePhoto)
.get(getPhoto)

export default router;