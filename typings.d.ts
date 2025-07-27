export interface Post{
    publishedAt: string | number | Date;
    _id: string;
    _createdAt: string;
    title: string;
    author: {
        alt: string;
        name: string;
        image: string;
    };
    // comments: Comment[];
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string;
    };
    body: [object];
}
