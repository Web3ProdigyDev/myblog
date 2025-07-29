import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: "Godwin's Blog",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'syyirs1j',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema,
})