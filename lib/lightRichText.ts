// lib/lightRichText.ts
import {
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  FixedToolbarFeature, // 👈 add
} from '@payloadcms/richtext-lexical'

export const lightTextEditor = lexicalEditor({
  features: () => [
    FixedToolbarFeature(), // 👈 add — hamesha visible toolbar
    BoldFeature(),
    ItalicFeature(),
    LinkFeature(),
  ],
})