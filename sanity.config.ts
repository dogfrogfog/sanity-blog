import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from '@/sanity/schemas'
import clientConfig from "@/sanity/config/client-config";

export default defineConfig({
  ...clientConfig,
  title: 'blog',
  basePath: '/admin',
  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})
