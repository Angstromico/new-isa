export interface ImageStrapi {
  data: {
    attributes: {
      url: string
      alternativeText?: string
    }
  }
}

export interface ImageContent {
  url: string
  alt?: string
}

export interface Service {
  Title: string;
  FirstText: string;
  MainImage: ImageStrapi;
  CarruselImage: {
    data: {
      attributes: ImageData;
    }[];
  };
  SecondText: string;
}