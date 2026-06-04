import "dotenv/config";
import ImageKit from "imagekit";

const myImageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadOnImageKit = async (fileBuffer, originalFileName) => {
  try {
    if (!fileBuffer) return null;

    const response = await myImageKit.upload({
      file: fileBuffer,
      fileName: originalFileName || `file_${Date.now()}`,
      folder: "/arcadeAI_games",
    });

    return response.url;
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    return null;
  }
};

export { uploadOnImageKit };
