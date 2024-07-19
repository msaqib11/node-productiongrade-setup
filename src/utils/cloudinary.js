import { v2 as cloudinary } from 'cloudinary';
import fs from "fs" //filesystem in nodejs //read,write,remove,files


 // Configuration
 cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload file on cloudinary

        // Upload an image
     const uploadResult = await cloudinary.uploader
     .upload(
         `${localFilePath}`, {
            resource_type:"auto",
         }
     );
     console.log("file is uploaded on cloudinary",uploadResult.url)
     return uploadResult
    } catch (error) {
        console.log(error)
        //remove locally saved temp files as operation gets failed
        fs.unlink(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}