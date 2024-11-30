export interface IZibnewsPost {
    id: number;
    title: string;
    content: string;
    shortContent: string;
    slug: string;
    image: string;
    date: string;
    category: string;
    author: string;
}

export interface IZibunityPost {
    id: number;
    title: string;
    content: string;
    slug: string;
    date: string;
    author: string;
    category: string;
}

type TPost = IZibnewsPost | IZibunityPost;


export function isZibnewsPost(post: TPost): post is IZibnewsPost {
    return (post as IZibnewsPost).image !== undefined;
}