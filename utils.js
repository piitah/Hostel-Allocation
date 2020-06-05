const cloudinary = require('cloudinary');
const dotenv = require('dotenv')

dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

/**
 *  Uploads file to Cloudinary CDN
 */
exports.uploadToCloudinary = async (stream, folder, imagePublicId) => {
    // if imagePublicId param is presented we should overwrite the image

    const streamLoad = await cloudinary.v2.uploader.upload(stream)
    if (!streamLoad) {
        throw new Error(
            'Something went wrong while uploading image to Cloudinary'
        );
    }
    return streamLoad

};

/**
 *  Deletes file from Cloudinary CDN
 *
 *  @param {string} publicId id for deleting the image
 */
exports.deleteFromCloudinary = async publicId => {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.destroy(publicId, (error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};