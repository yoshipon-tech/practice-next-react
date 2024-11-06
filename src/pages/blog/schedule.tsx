import { getPostBySlug } from "lib/api";
import Container from "components/Container";

type ScheduleProps = {
  title: string;
  publish: Date;
  content: string;
  eyecatch: string;
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
      <h1>{title}</h1>
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
