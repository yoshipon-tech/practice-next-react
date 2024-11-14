export type Slugs = {
  title: string;
  slug: string;
};

export function prevNextPost(
  allSlugs: Slugs[],
  cuurentSlug: string
): [Slugs, Slugs] {
  const numberOfPosts = allSlugs.length;

  const index = allSlugs.findIndex(({ slug }) => slug === cuurentSlug);

  const prevPost =
    index + 1 === numberOfPosts ? { title: "", slug: "" } : allSlugs[index + 1];

  const nextPost = index === 0 ? { title: "", slug: "" } : allSlugs[index - 1];
  return [prevPost, nextPost];
}
