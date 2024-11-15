import cssModule from "src/styles/Posts.module.css";
import Link from "next/link";
import Image from "next/image";

export type Post = {
  title: string;
  slug: string;
  eyecatch: Eyecatch;
};

type Eyecatch = {
  url: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export type Posts = {
  posts: Post[];
};

export default function Posts({ posts }: Posts) {
  return (
    <div className={cssModule.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={cssModule.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1152px) 576px, 50vw"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  );
}
