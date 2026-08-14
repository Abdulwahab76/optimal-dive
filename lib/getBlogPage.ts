// lib/getPost.ts

import { getPayload } from "payload";
import config from "@payload-config";

const payload = await getPayload({ config });

export async function getPost(slug: string) {
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