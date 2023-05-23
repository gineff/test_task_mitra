import delay from '@utils/delay'
import { CurrentUser } from '@constants/currentUser'

const about = `<p>Хочу поделиться своим резюме и рассказать о себе.</p>
<p>Меня зовут Андрей, я фронтенд разработчик</p>
<div>Мой стек:</div>
<div>HTML/CSS (BEM),</div>
<div>TypeScript / JavaScript (ES6+),</div>
<div>React (Hooks, HOC, Router v6),</div>
<div>Redux (Toolkit, RTQ, Thunk),</div>
<div>React Native (Expo, Navigation),</div>
<div>Webpack / Vite,</div>
<div>REST API,</div>
<div>Git/ Git Flow,</div>
<div>SCRUM / Linear,</div>
<div>NodeJS (Express),</div>
<div>PostgreSQL (Sequelize),</div>
<div>MongoDB/ Realm,</div>
<div>Docker / Docker Compose</div>
<br>
<p>Имею коммерческий опыт в разработке. Работая в сфере финансов, я освоил разработку конфигураций 1с версий 6-7-8, язык запросов SQL. Постепенно я расширил свой кругозор, начиная создавать сайты на CMS Wordpress, Drupal, а также SPA Backbone (Marionette) на заказ. Это позволило мне углублять свои знания в JavaScript и изучать новые библиотеки и фреймворки.</p>
<p>Я закончил курсы Middle-Frontend разработчик, где получил навыки работы в команде по методологии SCRUM, git-flow, cross-review, разрабатывая игру.</p>
`

export const fetchCurrentUser = async () => {
  await delay(1000)
  const currentUser = {
    name: 'Andrey',
    email: 'canone@inbox.ru',
    avatar: '/images/avatar.jpg',
    about,
  }
  return currentUser as CurrentUser
}

export default { fetchCurrentUser }
