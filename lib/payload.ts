import { getPayload } from "payload";
import config from "@payload-config";

let payloadPromise: ReturnType<typeof getPayload>;

export function getPayloadClient() {
  if (!payloadPromise) {
    payloadPromise = getPayload({ config });
  }

  return payloadPromise;
}