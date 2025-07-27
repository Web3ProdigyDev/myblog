import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: "Godwin's Blog",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'syyirs1j',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [deskTool(), visionTool()],
  schema,
})