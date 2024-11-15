import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";
import Posts from "components/Posts";
import type { Posts as PostsType } from "components/Posts";
import { getAllPosts } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";

export default function Home({ posts }: PostsType) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return { props: { posts } };
}
