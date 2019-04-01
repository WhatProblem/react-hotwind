import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
const Home = lazy(() => import('../view/home/Home'))
const AddGoods = lazy(() => import('../view/addgoods/AddGoods'))
const Main = lazy(() => import('../view/main/Main'))
const NotFound = lazy(() => import('../view/notfound/NotFound'))
const Login = lazy(() => import('../view/login/Login'))
const DoGoods = lazy(() => import('../view/dogoods/DoGoods'))

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
                meta: 'home',
                icon: 'h-home',
                routes: [
                    {
                        path: '/main/home/dogoods',
                        component: DoGoods,
                        name: '商品操作',
                        meta: 'dogoods',
                        icon: 'h-edit_goods'
                    }
                ]
            },
            {
                path: "/main/addgoods",
                component: AddGoods,
                name: '新增商品',
                meta: 'addgoods',
                icon: 'h-add_goods'
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