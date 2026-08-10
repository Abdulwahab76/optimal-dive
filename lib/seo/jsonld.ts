export function generateJsonLD(meta: any) {
  if (!meta) return null;

  if (meta.schema?.customSchema) {
    return meta.schema.customSchema;
  }

  return {
    "@context": "https://schema.org",

    "@type": meta.schema?.schemaType || "WebPage",

    name: meta.title,

    headline: meta.title,

    description: meta.description,

    url: meta.canonicalURL,
  };
}
