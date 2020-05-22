import { FC } from "react"
import { IPostListProps } from "../../../model/post"
import PostList from "../postList/postList"

import style from "./blog-box.module.scss"

const BlogBox: FC<IPostListProps> = ({ posts }) => (
  <PostList posts={posts} />
)

export default BlogBox