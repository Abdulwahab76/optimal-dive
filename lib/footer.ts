import { getPayload } from "payload";
import config from "@payload-config";

export async function getFooter() {
  const payload = await getPayload({
    config,
  });

  return await payload.findGlobal({
    slug: "footer",
    depth: 2,
  });
}