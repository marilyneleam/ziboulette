import { Container, Box, Typography, Divider } from "@mui/material";
import { IZibnewsPost } from "../../../types/IZibPost";
import zibnewsData from "../../../zibnews.json";
import Image from "next/image";
import { Metadata } from "next";
import { Article, WithContext } from "schema-dts";
import Script from "next/script";

interface Params {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // read route params
  const slug = (await params).slug;

  // fetch data
  const post = await fetchZibnewsPosts(slug);

  return {
    title: `${post.title} - Zibnews`,
    category: post.category,
    authors: [{ name: "Anto" }],
    description: post.shortContent,
  };
}

async function fetchZibnewsPosts(slug: string): Promise<IZibnewsPost> {
  const rawPost = zibnewsData.find((post) => post.slug === slug);
  return {
    ...rawPost,
    postType: "zibnews",
  } as IZibnewsPost;
}

const PostZibNews = async ({ params }: Params) => {
  const { slug } = await params;
  const post: IZibnewsPost = await fetchZibnewsPosts(slug);
  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.image,
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.shortContent,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "Ziboulette",
      logo: {
        "@type": "ImageObject",
        url: "https://www.ziboulette.fr/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.ziboulette.fr/zibnews/${post.slug}`,
    },
  };
  return (
    <Container maxWidth="lg" className="py-10">
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <Box component="article" className="mt-10">
        <h1 className="sr-only">Zibnews</h1>
        {/* Header */}
        <Box component="header" className="text-center mb-6">
          <Typography variant="h3" component="h2" className="font-bold pb-2">
            {post.title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="p"
            className="text-gray-500 mt-2 pb-4"
          >
            {post.date} • Par <a href="/auteur">Antony</a>
          </Typography>
          <Divider className="my-4" />
        </Box>

        {/* Main image */}
        <Box className="mb-8 text-center flex justify-center">
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
          Zibnews similaires
        </Typography>
        <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zibnewsData.slice(1, 4).map((item) => (
            <a
              key={item.slug}
              href={`/zibnews/${item.slug}`}
              className="group border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <Box className="relative w-full h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </Box>
              <Typography
                variant="h6"
                component="h3"
                className="mt-2 font-medium text-center text-ellipsis whitespace-nowrap overflow-hidden w-full"
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

export default PostZibNews;
