// Pages
import About from 'pages/About';
import Contact from 'pages/Contact';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';
import Post from 'pages/Post';
import Search from 'pages/Search';
import Home from "pages/Home";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/sobre',
    component: About,
    exact: true
  },
  {
    path: '/contato',
    component: Contact,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '*',
    component: NotFound,
    exact: false
  },
  {
    path: '/perfil',
    component: Profile,
    exact: true
  },
  {
    path: '/post',
    component: Post,
    exact: true
  },
  {
    path: '/pesquisa',
    component: Search,
    exact: true
  }
];

export default routes;