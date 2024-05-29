import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

export const GET = async (req:NextRequest, res:NextResponse) => {
  try { 
    const directoryPath = path.resolve("./public/images/more/photos")
    const directories = fs.readdirSync(directoryPath)
    const response = [];
    for (const directory of directories){
      const filePath = path.join(directoryPath, directory, "thumbnail.jpg")
      response.push({
        thumbnail: directory,
        heading: directory,
        match_date: new Date(Math.random())
      });
    }
    return new Response((JSON.stringify(response)));
  } catch (error) {
    return new Response(JSON.stringify({ message: "Some Error!" }));
  }
}

