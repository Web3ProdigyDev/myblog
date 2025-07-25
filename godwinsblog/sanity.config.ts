import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'


export default defineConfig({
  name: 'default',
  title: 'Godwin\'s Blog',

  projectId: 'syyirs1j',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema,
})

