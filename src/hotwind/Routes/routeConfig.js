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
        name: '首页',
        meta: 'main'
    },
    {
        path: '/main',
        component: Main,
        name: '首页',
        meta: 'main',
        routes: [
            {
                path: "/main/home",
                component: Home,
                name: '首页',
                meta: 'home'
            },
            {
                path: "/main/addgoods",
                component: AddGoods,
                name: '新增商品',
                meta: 'addgoods'
            }
        ]
    },
    {
        path: '/login',
        component: Login,
        name: '登陆',
        meta: 'login'
    },
    {
        path: '/404',
        component: NotFound,
        name: '未找到404',
        meta: '404'
    }
]

export { routes }