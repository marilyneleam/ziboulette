import { Card, CardContent, CardMedia, Link } from "@mui/material";
import {
  isZibnewsPost,
  IZibnewsPost,
  IZibunityPost,
} from "../../types/IZibPost";
import { CustomProps } from "../../types/IComponents";

const HighlightedCard = ({
  post,
  className,
}: { post: IZibnewsPost | IZibunityPost } & CustomProps) => {
  return (
    <Card className={`${className || " "}`}>
      <Link
        href={`/zibnews/${post.slug}`}
        underline="none"
        className="flex !text-black h-20 md:h-28"
      >
        {isZibnewsPost(post) && (
          <CardMedia
            className="flex-1 max-w-40 md:max-w-60 "
            image={post.image}
          />
        )}
        <CardContent className="flex-1 md:flex-[30%]">
          <h3 className="text-base md:text-xl overflow-hidden text-ellipsis line-clamp-2">
            {post.title}
          </h3>
        </CardContent>
      </Link>
    </Card>
  );
};

export default HighlightedCard;
