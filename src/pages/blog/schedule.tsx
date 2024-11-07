import { getPostBySlug } from "lib/api";
import Container from "components/Container";
import PostHeader from "components/PostHeader";
import Image from "next/image";

type ScheduleProps = {
  title: string;
  publish: Date;
  content: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
  };
  categories: string[];
};

export default function Schedule({
  title,
  publish,
  content,
  eyecatch,
  categories,
}: ScheduleProps) {
  return (
    <Container>
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />

        <figure>
          <Image
          src={eyecatch.url}
          alt=''
          layout='responsive'
          width={eyecatch.width}
          height={eyecatch.height}
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          />
        </figure>
      </article>
    </Container>
  );
}

export async function getStaticProps() {
  const slug = "schedule";
  const post = await getPostBySlug(slug);
  console.log("@@@@", post);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      eyecatch: post.eyecatch,
      categories: post.categories,
    },
  };
}
