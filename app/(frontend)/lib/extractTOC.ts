import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { slugify } from "./slugify";

export interface TOCItem {
  id: string;
  title: string;
}

export function extractTOC(
  editor: SerializedEditorState
): TOCItem[] {
  const items: TOCItem[] = [];

  function walk(nodes: any[]) {
    for (const node of nodes) {
      if (
        node.type === "heading" &&
        (node.tag === "h2" || node.tag === "h3")
      ) {
        const title =
          node.children
            ?.map((child: any) => child.text ?? "")
            .join("") ?? "";

        if (title) {
          items.push({
            id: slugify(title),
            title,
          });
        }
      }

      if (Array.isArray(node.children)) {
        walk(node.children);
      }
    }
  }

  walk(editor.root.children);

  return items;
}