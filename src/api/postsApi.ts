import axios, { AxiosResponse } from 'axios'
import { Post } from '@constants/posts'

export const fetchPosts = async () => {
  const response: AxiosResponse<Post[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  )
  return response.data
}

export default { fetchPosts }
