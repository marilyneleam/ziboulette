import { Box, Card, CardContent, Link, Typography } from "@mui/material";
import { isZibnewsPost, IZibnewsPost, IZibunityPost } from "../types/IZibPost";
import { ICustomProps } from "../types/IComponents";
import Image from "next/image";

const HighlightedCard = ({
  post,
  className,
}: { post: IZibnewsPost | IZibunityPost } & ICustomProps) => {
  return (
    <Card
      component="article"
      className={`${className || " "} rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300`}
    >
      <Link
        href={
          isZibnewsPost(post)
            ? `/zibnews/${post.slug}`
            : `/zibunity/${post.slug}`
        }
        underline="none"
      >
        {isZibnewsPost(post) && (
          <div className="h-[160px] lg:h-[140px] relative">
            <Image
              src={post.image}
              fill={true}
              className="w-full object-cover"
              alt={post.title}
              loading="lazy"
            />
          </div>
        )}
        <CardContent>
          <Typography
            variant="h6"
            component="h3"
            className="font-bold text-primary-900 line-clamp-2"
          >
            {post.title}
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-600 line-clamp-3 mt-2"
          >
            {isZibnewsPost(post) ? post.shortContent : post.content}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default HighlightedCard;
