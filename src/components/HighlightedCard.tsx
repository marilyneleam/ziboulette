import { Box, Card, CardContent, CardMedia, Link } from "@mui/material";
import { isZibnewsPost, IZibnewsPost, IZibunityPost } from "../types/IZibPost";
import { ICustomProps } from "../types/IComponents";

const HighlightedCard = ({
  post,
  className,
}: { post: IZibnewsPost | IZibunityPost } & ICustomProps) => {
  return (
    <Box>
      <Card
        component="article"
        className={`${className || " "} bg-zib-light-gray rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 w-full aspect-square`}
      >
        <Link
          href={`/zibnews/${post.slug}`}
          underline="none"
          className="block !text-black h-full"
        >
          {isZibnewsPost(post) && (
            <div className="h-[60%] relative">
              <CardMedia
                className="w-full h-full object-cover"
                image={post.image}
              />
            </div>
          )}
          <CardContent className="p-4 h-[40%] flex items-center justify-center text-center">
            <h1 className="text-lg font-semibold line-clamp-2">{post.title}</h1>
          </CardContent>
        </Link>
      </Card>
    </Box>
  );
};

export default HighlightedCard;
