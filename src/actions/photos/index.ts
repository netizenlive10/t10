import { PhotoResponse, photosDirectoryPath } from '@/types/photo/photos';
import fs, { Dirent } from 'fs';
import path from "path";


const handlePhoto = (folderData: Dirent[], response: PhotoResponse) => {
    for (const data of folderData) {
        if (data.isFile()) {
            response.path.push(data.name);
        }
    }
}


const handleDirectory = (folderData: Dirent[], response: PhotoResponse) => {
    for (const data of folderData) {
        if (data.isDirectory()) {
            response.path.push(data.name);
        }
    }
};



export const getPhotos = async (inDirectory: string | undefined | null) => {

    // Function that will handle photo or directory
    let getPathFunc: (folderData: Dirent[], response: PhotoResponse) => void = handleDirectory;

    // Default directory path 
    let directoryPath = path.resolve(photosDirectoryPath);


    const response: PhotoResponse = {
        path: [],
        isDirectory: true
    }

    try {

        if (inDirectory) {
            directoryPath = path.join(directoryPath, inDirectory);
            getPathFunc = handlePhoto;
            response.isDirectory = false;
        }

        const folderData = fs.readdirSync(directoryPath, { withFileTypes: true });

        getPathFunc(folderData, response)

        return response;
    } catch (error) {
        console.log(error)
        return response
    }

}


