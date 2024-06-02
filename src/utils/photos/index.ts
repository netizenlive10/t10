import path from "path";
import fs from 'fs'

export const getPhotos = async (directory: string | undefined | null) => {
    let directoryPath = path.resolve("./public/images/photos");
    try {
        if (directory) {
            directoryPath = path.join(directoryPath, directory);
        }
        const folderData = fs.readdirSync(directoryPath, { withFileTypes: true });
        const response = [];
        for (const data of folderData) {
            if (data.isDirectory()) {
                response.push(data.name)
            }
        }
        return response;
    } catch (error) {
        console.log(error)
        return []
    }

}

