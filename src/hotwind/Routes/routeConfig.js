import { lazy } from 'react'
import { Redirect } from 'react-router-dom'
const Home = lazy(() => import('../view/home/Home'))
const ManageGoods = lazy(() => import('../view/manageGoods/ManageGoods'))
const Main = lazy(() => import('../view/main/Main'))
const NotFound = lazy(() => import('../view/notfound/NotFound'))
const Login = lazy(() => import('../view/login/Login'))
const AddGoods = lazy(() => import('../view/addGoods/AddGoods'))
const EditGoods = lazy(() => import('../view/editGoods/EditGoods'))
const Analyse = lazy(() => import('../view/analyse/Analyse'))
const Docs = lazy(()=>import('../view/docs/Docs'))
const Excel = lazy(()=>import('../view/excel/Excel'))
const ShareLink = lazy(()=>import('../view/shareLink/ShareLink'))
const UserList = lazy(()=>import('../view/userList/UserList'))

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
            },
            {
                path: "/main/manageGoods",
                component: ManageGoods,
                name: '商品管理',
                meta: 'manageGoods',
                icon: 'h-goods',
                routes: [
                    {
                        path: '/main/manageGoods/addGoods',
                        component: AddGoods,
                        name: '新增商品',
                        meta: 'addGoods',
                        icon: 'h-add_goods'
                    },
                    {
                        path: '/main/manageGoods/editGoods',
                        component: EditGoods,
                        name: '商品修改',
                        meta: 'editGoods',
                        icon: 'h-edit_goods'
                    }
                ]
            },
            {
                path: "/main/analyse",
                component: Analyse,
                name: '数据分析',
                meta: 'analyse',
                icon: 'h-analyse',
            },
            {
                path: "/main/docs",
                component: Docs,
                name: '文档',
                meta: 'docs',
                icon: 'h-docs',
            },
            {
                path: "/main/excel",
                component: Excel,
                name: 'excel',
                meta: 'excel',
                icon: 'h-excel',
            },
            {
                path: "/main/shareLink",
                component: ShareLink,
                name: '数据分析',
                meta: 'shareLink',
                icon: 'h-share_link',
            },
            {
                path: "/main/userList",
                component: UserList,
                name: '数据分析',
                meta: 'userList',
                icon: 'h-user_list',
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