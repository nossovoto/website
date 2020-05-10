import { FC } from "react"
import { IPostListProps } from "../../../model/post"
import PostList from "../postList/postList"

import "./blog-box.scss"

const BlogBox: FC<IPostListProps> = ({ posts }) => (
  <PostList posts={posts} />
)

export default BlogBox