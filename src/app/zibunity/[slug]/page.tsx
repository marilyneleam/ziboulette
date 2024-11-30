"use server";

import { Container, Box, Typography, Divider } from "@mui/material";
import { IZibunityPost } from "../../../types/IZibPost";
import zibunityData from "../../../zibunity.json";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

interface Params {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata(
  { params, searchParams }: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const post = await fetchZibunityPosts(slug);

  return {
    title: `${post.title} - Zibunity`,
    category: post.category,
    authors: [{ name: "Anto" }],
    description: post.content,
  };
}
async function fetchZibunityPosts(slug: string): Promise<IZibunityPost> {
  const rawPost = zibunityData.find((post) => post.slug === slug);
  return {
    ...rawPost,
    postType: "zibunity", // Propriété ajoutée
  } as IZibunityPost;
}

const PostZibunity = async ({ params }: Params) => {
  const { slug } = await params;
  const post: IZibunityPost = await fetchZibunityPosts(slug);

  return (
    <Container maxWidth="lg" className="py-10">
      <Box component="article" className="mt-10">
        <h1 className="sr-only">Zibunity</h1>
        {/* Header */}
        <Box component="header" className="text-center mb-6">
          <Typography variant="h3" component="h2" className="font-bold">
            {post.title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            className="text-gray-500 mt-2"
          >
            {post.date}
          </Typography>
          <Divider className="my-4" />
        </Box>

        {/* Main image */}
        <Box className="mb-8 flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </Box>

        {/* Content */}
        <Box className="text-justify leading-relaxed">
          <Typography variant="body1" component="p">
            {post.content}
          </Typography>
        </Box>

        {/* Tags */}
        <Box component="footer" className="mt-10">
          <Divider className="mb-4" />
          <Typography variant="body2" className="text-gray-600">
            <a
              href={`/tag/${post.postType}`}
              className="text-primary hover:underline"
            >
              #{post.postType}
            </a>
          </Typography>
        </Box>
      </Box>

      {/* Suggested articles */}
      <Box component="aside" className="mt-12">
        <Typography variant="h4" component="h2" className="font-bold mb-4">
          Zibunity similaires
        </Typography>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zibunityData.slice(1, 4).map((item) => (
            <a
              key={item.slug}
              href={`/zibunity/${item.slug}`}
              className="group border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Box className="relative w-full h-[200px] overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md group-hover:brightness-90"
                />
              </Box>
              <Typography
                variant="h6"
                component="h3"
                className="mt-2 font-medium text-center text-ellipsis whitespace-nowrap overflow-hidden w-full"
                title={item.title}
              >
                {item.title}
              </Typography>
            </a>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PostZibunity;
