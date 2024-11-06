import { Container } from "@mui/material";
import { IZibnewsPost } from "../../../types/IZibPost";
import zibnewsData from "../../../zibnews.json";
import Image from "next/image";

interface Params {
  params: { slug: string };
}

const postZibNews = async ({ params }: Params) => {
  const { slug } = params;
  const post: IZibnewsPost = await fetchZibnewsPosts(slug);
  return (
    <Container>
      <article>
        <header>
          <h1 className="text-3xl md:text-4xl text-left mt-4">{post.title}</h1>
          <time>{post.date}</time>
          <address>
            Par <a href="/auteur">Anto</a>
          </address>
          <meta content={post.shortContent} />
        </header>
        <figure>
          <Image src={post.image} alt={post.title} width={600} height={400} />
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
  );
};

export default postZibNews;

async function fetchZibnewsPosts(slug: string): Promise<IZibnewsPost> {
  // Remplacez par une requête API ou une lecture de fichier
  return zibnewsData.filter((post) => post.slug === slug)[0];
}
