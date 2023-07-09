import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  title: 'sanity-blog-part',

  projectId: 'bhts3xok',
  dataset: 'production',
  
  apiVersion: '2023-07-09',
  basePath: '/admin',

  plugins: [deskTool()],
})
