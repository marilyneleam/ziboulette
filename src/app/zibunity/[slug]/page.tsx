import { Container } from "@mui/material";
import { IZibunityPost } from "../../../types/IZibPost";
import zibunityData from "../../../zibunity.json";
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
  const post = await fetchZibunityPosts(slug);

  return {
    title: `${post.title} - Zibunity`,
    category: post.category,
    authors: [{ name: "Anto" }],
    description: post.content,
  };
}

const postZibunity = async ({ params }: Params) => {
  const { slug } = await params;
  const post: IZibunityPost = await fetchZibunityPosts(slug);
  const jsonLd: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.content,
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
      "@id": `https://www.ziboulette.fr/zibunity/${post.slug}`,
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
            <meta content={post.content} />
          </header>
          <div>
            <p className="text-base">{post.content}</p>
          </div>
          <footer>
            <div>
              <a href="/tag/zibunity">{post.category}</a>
            </div>
          </footer>
        </article>
      </Container>
    </>
  );
};

export default postZibunity;

async function fetchZibunityPosts(slug: string): Promise<IZibunityPost> {
  // Remplacez par une requête API ou une lecture de fichier
  return zibunityData.filter((post) => post.slug === slug)[0];
}
