import { useState, FC } from 'react'
import { IPostListProps } from 'model/post'
import Pagination from '@material-ui/lab/Pagination'
import PostItemList from '../postItemList/postItemList'
import { getIntFromDate, scrollTo } from '../../../util/util'
import style from "./postList.module.scss"

const PostList: FC<IPostListProps> = ({ posts }) => {

  posts = posts.sort((a, b) => {
    const dateA = getIntFromDate(a.createdAt)
    const dateB = getIntFromDate(b.createdAt)
    if (dateA > dateB) return -1
    else if (dateA < dateB) return 1
    return 0
  })

  const postsPerPage = 10
  const numberOfPages = Math.ceil(posts.length / postsPerPage)
  const [page, setPage] = useState(1)
  const [listPost, setListPost] = useState(posts.slice(0, postsPerPage))

  const handlePageChange = async (event, value) => {
    if (page !== value)
    {
      setPage(value)
      let begin
      let end

      if (value === 1)
        begin = 0
      else
        begin = postsPerPage * value - postsPerPage

      if (value === numberOfPages)
        end = posts.length
      else
        end = value * postsPerPage

      await setListPost([])
      await setListPost(posts.slice(begin, end))

      setTimeout(() => {
        scrollTo()
      }, 100)
    }
  }

  return (
    <div className={style.main}>
      <div className={style.list} >
        {listPost.map((post, key) => {
          let showSeparator = key + 1 < listPost.length
          let showNewsletter = listPost.length < 4 && key + 1 === listPost.length
          if (listPost.length > 3)
            showNewsletter = key + 1 === Math.ceil(listPost.length / 2) - 1
          if (showNewsletter) showSeparator = false
          return <PostItemList
            key={key}
            post={post}
            showSeparator={showSeparator}
            showNewsletter={showNewsletter}
          />
        })}
      </div>
      <Pagination
        count={numberOfPages}
        page={page}
        onChange={handlePageChange}
        variant="outlined" />
    </div>
  )
}

export default PostList
