import { Box, Card, CardContent, Link } from "@mui/material";
import { isZibnewsPost, IZibnewsPost, IZibunityPost } from "../types/IZibPost";
import { ICustomProps } from "../types/IComponents";
import Image from "next/image";

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
          href={
            isZibnewsPost(post)
              ? `/zibnews/${post.slug}`
              : `/zibunity/${post.slug}`
          }
          underline="none"
          className="block !text-black h-full"
        >
          {isZibnewsPost(post) && (
            <div className="h-[60%] relative">
              <Image
                src={post.image}
                fill={true}
                className="object-cover"
                alt={post.title}
                loading="lazy"
              />
            </div>
          )}
          <CardContent className="p-4 h-[40%] flex items-center justify-center text-center">
            <h4 className="text-lg font-semibold line-clamp-2">{post.title}</h4>
          </CardContent>
        </Link>
      </Card>
    </Box>
  );
};

export default HighlightedCard;
