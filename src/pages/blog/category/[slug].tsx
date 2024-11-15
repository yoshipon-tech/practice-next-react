import Container from "components/Container";
import Meta from "components/Meta";
import PostHeader from "components/PostHeader";
import Posts, { Post } from "components/Posts";
import { getAllCategories, getAllPostsByCategory } from "lib/api";

type CategoryProps = {
  name: string;
  posts: Post[];
};

import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";
export default function Category({ name, posts }: CategoryProps) {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Blog Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticPaths() {
  const allCategories = await getAllCategories();
  return {
    paths: allCategories.map(
      ({ slug }: { slug: string }) => `/blog/category/${slug}`
    ),
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const catSlug = context.params.slug;

  const allCategories = await getAllCategories();
  const category = allCategories.find(
    (cat: { slug: string }) => cat.slug === catSlug
  );

  const posts = await getAllPostsByCategory(category.slug);
  console.log(category);

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: category.name,
      posts: posts,
    },
  };
}
