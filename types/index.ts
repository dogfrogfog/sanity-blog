import { PortableTextBlock } from "sanity"

export type Page = {
    _id: string
    _createdAt: string
    title: string
    slug: string
    content: PortableTextBlock[]
}

export type Project = {
    _id: string
    _createdAt: string
    name: string
    slug: string
    image: string
    url: string
    content: PortableTextBlock[]
}
