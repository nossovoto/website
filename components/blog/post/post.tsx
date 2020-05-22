import { FC } from "react"
import { IPostProps } from "../../../model/post"
import SocialBox from "../../socialBox/socialBox"
import { formatDate } from "../../../util/util"

import style from "./post.module.scss"

const PostContainer: FC<IPostProps> = ({ post }) => (
  <>
    <div className={style.container}>
      <div className={style.social}>
        <SocialBox />
      </div>
      <div className={style.main}>
        <h1>{post.title}</h1>
        <img src={post.thumbnail} />
        <div
          className={style.content}
          dangerouslySetInnerHTML={{ __html: post.text }}
        ></div>
      </div>
    </div>
    <div className={style.author_separator}>
      <h2>
        <span>Autor</span>
      </h2>
    </div>
    <div className={style.author}>
      <div className={style.author_img}></div>
      <div className={style.author_name}>
        Escrito por <a>{post.author}</a> em {formatDate(post.createdAt)}
      </div>
    </div>
  </>
)

export default PostContainer
