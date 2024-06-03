import { carouselDirectoryPath, CarouselResponse } from '@/types/home/carousel';

import fs from 'fs';
import path from "path";


export const getCarousel = async () => {
    // Default directory path 
    let directoryPath = path.resolve(carouselDirectoryPath);


    const response: CarouselResponse = [];

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


