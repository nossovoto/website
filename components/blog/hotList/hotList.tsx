import { FC } from "react"
import Link from "next/link"
import { IPostListProps } from "../../../model/post"
import { formatDate } from "../../../util/util"
import style from "./hotList.module.scss"

const PostHotList: FC<IPostListProps> = ({ posts }) => {
  posts = posts.sort((a, b) => {
    if (a.views > b.views) return -1
    else if (a.views < b.views) return 1
    return 0
  })

  return (
    <div className={style.main}>
      <div className={style.box}>
        <h1>Mais Acessados</h1>
        {posts.map((post, key) => {
          const data = formatDate(post.createdAt)
          return (
            <Link
              key={key}
              href="/post/[slug]"
              as={`/post/${post.slug}`}
              passHref
              prefetch={false}
            >
              <div className={style.post}>
                <h3>{post.title}</h3>
                <span>
                  por <a>{post.author ? post.author : "nossovoto"}</a> em {data}
                </span>
                <span>{post.views ? post.views : 0} visualizações</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default PostHotList
