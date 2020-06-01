import { IPostProps } from "model/post"
import { FC, useRef } from "react"
import Link from "next/link"
import style from './postItem.module.scss'
import { formatDate } from "../../../util/util"

const PostItem: FC<IPostProps> = ({ post }) => {
    return (
        <Link
            href="/post/[slug]"
            as={`/post/${post.slug}`}
            passHref
        >
            <a className={style.main} >
                <div className={style.img}>
                    <img src={post.thumbnail} />
                </div>
                <div className={style.content}>
                    <h1>{post.title}</h1>
                    <p className={style.author}>
                        Por <a>{post.author ? post.author : "nossovoto"}</a> em {formatDate(post.createdAt)}
                    </p>
                    <span className={style.sumary}>
                        {post.summary}
                    </span>
                </div>
            </a>
        </Link>
    )
}

export default PostItem
