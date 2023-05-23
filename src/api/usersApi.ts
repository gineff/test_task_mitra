import axios, { AxiosResponse } from 'axios'
import { User } from '@constants/posts'
import delay from '@utils/delay'

export const fetchUsers = async () => {
  const response: AxiosResponse<User[]> = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  )
  await delay(500)
  return response.data
}

export default { fetchUsers }
