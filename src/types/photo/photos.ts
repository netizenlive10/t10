export type PhotosProps = {
  photos: []
}


export type PhotoResponse = {
  path: string[],
  isDirectory: boolean
}

export const photosDirectoryPath = "./public/images/photos"