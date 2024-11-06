import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || "defaultServiceDomain",
  apiKey: process.env.API_KEY || "default",
});

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: "blogs",
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    console.log("~~ getPpostBySlug ~~");
    console.log(err);
  }
}
