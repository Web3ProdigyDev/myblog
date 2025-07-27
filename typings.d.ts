export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: {
      asset: {
        _ref: any;
        url: string;
      };
      alt?: string;
    };
  };
  description: string;
  mainImage: {
    asset: {
      _ref: any;
      url: string;
    };
    alt?: string;
  };
  slug: {
    current: string;
  };
  body: any[]; // PortableText blocks
  publishedAt: string | number | Date;
  categories?: {
    _id: string;
    title: string;
  }[];
  comments: Comment[]; // ✅ Add this
}

export interface Comment {
  _id: string;
  name: string;
  email: string;
  comment: string;
  approved: boolean;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  post: {
    _ref: string;
    _type: string;
  };
}
