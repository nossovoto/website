export interface IPost {
    articles: []
    author: string
    author_link: string
    comments: []
    createdAt: string
    keywords: string
    slug: string
    status: boolean
    summary: string
    thumbnail: string
    thumbnail_alt: string
    title: string
    text: string
    views: number
}

export type IPostList = IPost[]

export interface IPostListProps {
    posts: IPostList
}

export interface IPostProps {
    post: IPost
}