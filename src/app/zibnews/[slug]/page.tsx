import { Container } from "@mui/material";
import { IZibnewsPost } from "../../../types/IZibPost";
import zibnewsData from "../../../zibnews.json";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { Article, WithContext } from "schema-dts";
import Script from "next/script";

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
  const post = await fetchZibnewsPosts(slug);

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent);

  return {
    title: `${post.title} - Zibnews`,
    category: post.category,
    authors: [{ name: "Anto" }],
    description: post.shortContent,
  };
}

const postZibNews = async ({ params }: Params) => {
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
    <>
      <Container>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <article>
          <header>
            <h1 className="text-3xl md:text-4xl text-left mt-4">
              {post.title}
            </h1>
            <time>{post.date}</time>
            <address>
              Par <a href="/auteur">Anto</a>
            </address>
            <meta content={post.shortContent} />
          </header>
          <figure>
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              loading="lazy"
            />
          </figure>
          <div>
            <p className="text-base">{post.content}</p>
          </div>
          <footer>
            <div>
              <a href="/tag/zibnews">Zibnews</a>
            </div>
          </footer>
        </article>
      </Container>
    </>
  );
};

export default postZibNews;

async function fetchZibnewsPosts(slug: string): Promise<IZibnewsPost> {
  // Remplacez par une requête API ou une lecture de fichier
  return zibnewsData.filter((post) => post.slug === slug)[0];
}
