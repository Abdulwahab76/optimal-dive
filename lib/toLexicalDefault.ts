// lib/toLexicalDefault.ts
export function toLexicalDefault(text: string) {
  return {
    root: {
      type: 'root',
      direction: 'ltr' as const,
      format: '' as const,
      indent: 0,
      version: 1,
      children: [
        {
          type: 'paragraph',
          direction: 'ltr' as const,
          format: '' as const,
          indent: 0,
          version: 1,
          children: [
            {
              type: 'text',
              version: 1,
              text,
            },
          ],
        },
      ],
    },
  }
}