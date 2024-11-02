import Container from "components/Container";
import Hero from "components/Hero";
import Meta from "components/Meta";

export default function Home() {
  return (
    <Container>
      <Meta pageTitle="ブログ" />
      <Hero title="Blog" subtitle="Recent Posts" />
    </Container>
  );
}
