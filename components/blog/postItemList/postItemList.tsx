import { FC } from "react"
import { IPost, IPostList } from "model/post"
import NewsletterBlog from "../newsletterBlog/newsletterBlog"
import style from "./postItemList.module.scss"
import PostItem from "../postItem/postItem"

interface IPostItemList {
    listPost: IPostList
    post: IPost
    position: number
}

const PostItemList: FC<IPostItemList> = ({ post, position, listPost }) => {

    let showSeparator = position + 1 < listPost.length
    let showNewsletter = listPost.length < 4 && position + 1 === listPost.length
    if (listPost.length > 3)
        showNewsletter = position + 1 === Math.ceil(listPost.length / 2) - 1
    if (showNewsletter) showSeparator = false

    return (
        <>
            <PostItem post={post} />
            {showSeparator ? <div className={style.separator} /> : null}
            {showNewsletter ? <NewsletterBlog /> : null}
        </>
    )
}

export default PostItemList
