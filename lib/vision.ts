import { getPayload } from "payload";
import config from "@payload-config";

export async function getVisionCTA() {
  const payload = await getPayload({
    config,
  });

  return await payload.findGlobal({
    slug: "vision-cta",
    depth: 2,
  });
}