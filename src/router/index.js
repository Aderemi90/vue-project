import { createRouter, createWebHistory } from 'vue-router'
import RepoHome from '../views/RepoHome.vue';
import RepoDetails from '../views/RepoDetails.vue';
import Error404 from '../views/Error-404.vue';
import About from '../views/AboutUs.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: RepoHome
    },
    {
      path: '/RepoDetails/:id',
      name: 'RepoDetails',
      component: RepoDetails,
      props: true
    },
    {
      path: '/AboutUs/',
      name: 'AboutUs',
      component: About,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error404',
      component: Error404
    }
  ]
})

export default router
