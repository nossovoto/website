import axios from "axios"
import { IPostList } from "model/post"
import { POST_API_URL } from "./consts"
import { getUnauthorizedHttpAgent } from "./util"

// TODO passar o numero de posts que quer recuperar do servidor
// Seria os ultimos ${numberOfPosts}
export async function getPosts(numberOfPosts?: number) {
  try
  {
    const response = await axios.get(POST_API_URL, {
      httpsAgent: getUnauthorizedHttpAgent()
    })

    const data: IPostList = await Object.values(response.data)
    return data
  } catch (error)
  {
    console.error(error)
  }
}

export async function getPost(slug: string) {
  try
  {
    const url = POST_API_URL + slug + "/visitor"
    const response = await axios.get(url, {
      httpsAgent: getUnauthorizedHttpAgent()
    })
    const data: IPostList = await Object.values(response.data)
    const post = data[0]
    return post
  } catch (error)
  {
    console.error(error)
  }
}
