interface BasePost {
    id: number;
    title: string;
    content: string;
    slug: string;
    image: string;
    date: string;
    category: string;
}

export interface IZibnewsPost extends BasePost {
    shortContent: string;
    tags?: string[];
    postType: "zibnews";
}

export interface IZibunityPost extends BasePost {
    tags?: string[];
    postType: "zibunity";
}

interface RawZibunityPost extends Omit<IZibunityPost, "postType"> {
}

type TPost = IZibnewsPost | IZibunityPost;

export function isZibnewsPost(post: TPost): post is IZibnewsPost {
    return post.postType === "zibnews";
}

export function isZibunityPost(post: TPost): post is IZibunityPost {
    return post.postType === "zibunity";
}
