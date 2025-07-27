export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
      alt?: string; // Matches updated authorType schema
    };
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt?: string; // Matches postType schema
  };
  slug: {
    current: string;
  };
  body: Array<{
    _type: string;
    [key: string]: any;
  }>; // Matches blockContentType
  publishedAt: string | number | Date;
  categories?: Array<{
    _id: string;
    title: string;
  }>; // Matches postType schema
}