import { FC } from "react"
import { IPostListProps } from "model/post"
import PostList from "../postList/postList"

const BlogBox: FC<IPostListProps> = ({ posts }) => (
  <PostList posts={posts} />
)

export default BlogBox