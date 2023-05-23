import axios, { AxiosResponse } from 'axios'
import { Post } from '@constants/posts'
import delay from '@utils/delay'

export const fetchPosts = async () => {
  const response: AxiosResponse<Post[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  )
  await delay(500)
  return response.data
}

export default { fetchPosts }
