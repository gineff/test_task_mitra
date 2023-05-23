import axios, { AxiosResponse } from 'axios'
import { PostComment } from '@constants/comments'
import delay from '@utils/delay'

export const fetchComments = async (id = 1) => {
  const response: AxiosResponse<PostComment[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  )
  await delay(500)
  return response.data
}

export default { fetchComments }
