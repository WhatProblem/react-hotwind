import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
const Home = lazy(() => import('../view/Home'))
const AddGoods = lazy(() => import('../view/AddGoods'))
const Main = lazy(() => import('../view/Main'))
const NotFound = lazy(() => import('../view/NotFound'))
const Login = lazy(() => import('../view/Login'))

const routes = [
    {
        path: '/',
        exact: true,
        component: Main,
    },
    {
        path: '/main',
        component: Main,
        routes: [
            {
                path: "/main/home",
                component: Home
            },
            {
                path: "/main/addgoods",
                component: AddGoods
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/404',
        component: NotFound
    }
]

export { routes }