import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const directoryParam = req.nextUrl.searchParams.get("directory");
    let directoryPath = path.resolve("./public/images/more/photos");

    if (directoryParam){  
      directoryPath = path.join(directoryPath, directoryParam);
    }
    const response = fs.readdirSync(directoryPath);
    console.log(directoryPath)
    return new Response((JSON.stringify(response || [])));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Some Error!" }));
  }
}

