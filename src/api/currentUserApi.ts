import delay from '@utils/delay'
import { CurrentUser } from '@constants/currentUser'

const about = 'about me'

export const fetchCurrentUser = async () => {
  await delay(500)
  const currentUser = {
    name: 'Andrey',
    email: 'canone@inbox.ru',
    about,
  }
  return currentUser as CurrentUser
}

export default { fetchCurrentUser }
