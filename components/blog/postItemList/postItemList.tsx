import { useState, FC } from "react"
import Link from "next/link"
import { IPost } from "../../../model/post"
import NewsletterBlog from "../newsletterBlog/newsletterBlog"
import { formatDate } from "../../../util/util"

import "./postItemList.scss"

interface IPostItemList {
    post: IPost
    showSeparator: boolean
    showNewsletter: boolean
}

const PostItemList: FC<IPostItemList> = ({ post, showSeparator, showNewsletter }) => {

    const [hide, setHide] = useState(true)
    const showContent = () => setHide(false)
    const data = formatDate(post.createdAt)

    return (
        <>
            <Link
                href="/post/[slug]"
                as={`/post/${post.slug}`}
                passHref
            >
                <div className="blog-item-box" hidden={hide}>
                    <div className="blog-item-img">
                        <img src={post.thumbnail}
                            onLoad={() => showContent()} onError={() => showContent()} />
                    </div>
                    <div className="blog-item-content">
                        <h1>{post.title}</h1>
                        <p className="blog-item-content-author">
                            Por <a>{post.author ? post.author : "nossovoto"}</a> em {data}
                        </p>
                        <span className="blog-item-content-sumary">
                            {post.summary}
                        </span>
                    </div>
                </div>
            </Link>
            {showSeparator ? <div className="blog-item-separator" /> : null}
            {showNewsletter ? <NewsletterBlog /> : null}
        </>
    )
}

export default PostItemList