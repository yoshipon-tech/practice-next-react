import { getPostBySlug, getAllSlugs } from "lib/api";
import Container from "components/Container";
import PostHeader from "components/PostHeader";
import Image from "next/image";
import PostBody from "components/PostBody";
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "components/TwoColumn";
import ConvertBody from "components/ConvertBody";
import PostCategories from "components/PostCategories";
import { Category } from "components/PostCategories";

import { eyecatchLocal } from "lib/constants";
import { extranctText } from "lib/extractText";
import Meta from "components/Meta";
import { getPlaiceholder } from "plaiceholder";
import { prevNextPost } from "lib/prevNextPost";
import { Slugs } from "lib/prevNextPost";
import Pagination from "components/Pagination";
//ローカルの代替アイキャッチ画像

type ScheduleProps = {
  title: string;
  publish: Date;
  content: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL: string;
  };
  categories: Category[];
  description: string;
  prevPost: Slugs;
  nextPost: Slugs;
};

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}: ScheduleProps) {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
          </TwoColumnSidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs(5);
  return {
    paths: allSlugs.map(({ slug }: { slug: string }) => `/blog/${slug}`),
    fallback: "blocking",
  };
}

export async function getStaticProps(context: { params: { slug: string } }) {
  const slug = context.params.slug;

  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    const description = extranctText(post.content);
    const eyecatch = post.eyecatch ?? eyecatchLocal;

    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataURL = base64;

    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    };
  }
}
