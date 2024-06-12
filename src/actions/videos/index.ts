
import { ReelResponse, reelDirectoryPath } from '@/types/videos/reel';
import fs from 'fs';
import path from "path";


export const getReels = async () => {
    // Default directory path 
    let directoryPath = path.resolve(reelDirectoryPath);

    const response: ReelResponse = [];

    try {

        const folderData = fs.readdirSync(directoryPath, { withFileTypes: true });

        for (const data of folderData) {
            if (data.isFile()) {
                response.push(data.name);
            }
        }
        return response;
    } catch (error) {
        console.log(error)
        return response
    }
}


