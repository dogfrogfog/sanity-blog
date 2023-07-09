import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from '@/sanity/schemas'

export default defineConfig({
  title: 'blog',

  projectId: 'bhts3xok',
  dataset: 'production',
  
  apiVersion: '2023-07-09',
  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})
