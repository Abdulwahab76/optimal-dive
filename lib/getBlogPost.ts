import { getPayloadClient } from "./payload";

export async function getBlogPost(slug: string) {
  const payload = await getPayloadClient();

  const { docs } = await payload.find({
    collection: "posts",
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: "published",
      },
    },
    depth: 2,
    limit: 1,
  });

  return docs[0] ?? null;
}