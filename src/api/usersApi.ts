import axios, { AxiosResponse } from 'axios'
import { User } from '@constants/posts'

export const fetchUsers = async () => {
  const response: AxiosResponse<User[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  )
  return response.data
}

export default { fetchUsers }
