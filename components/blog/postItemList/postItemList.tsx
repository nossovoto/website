import { useState, FC } from "react"
import Link from "next/link"
import { IPost } from "model/post"
import { formatDate } from "../../../util/util"
import NewsletterBlog from "../newsletterBlog/newsletterBlog"
import style from "./postItemList.module.scss"

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
                <div className={style.main} hidden={hide}>
                    <div className={style.img}>
                        <img src={post.thumbnail}
                            onLoad={() => showContent()} onError={() => showContent()} />
                    </div>
                    <div className={style.content}>
                        <h1>{post.title}</h1>
                        <p className={style.author}>
                            Por <a>{post.author ? post.author : "nossovoto"}</a> em {data}
                        </p>
                        <span className={style.sumary}>
                            {post.summary}
                        </span>
                    </div>
                </div>
            </Link>
            {showSeparator ? <div className={style.separator} /> : null}
            {showNewsletter ? <NewsletterBlog /> : null}
        </>
    )
}

export default PostItemList