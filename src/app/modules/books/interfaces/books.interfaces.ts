export interface IBooks {
  kind: string;
  totalItems: number;
  items: IBook[];
}

export interface IBook {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: IVolumeInfo;
}

export interface IVolumeInfo {
  title: string;
  subtitle: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  imageLinks: IImageLinks;
}

export interface IImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
