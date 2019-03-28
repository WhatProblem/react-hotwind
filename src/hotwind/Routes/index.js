import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom"
const Home = lazy(() => import('../view/Home'))
const AddGoods = lazy(() => import('../view/AddGoods'))
const Main = lazy(() => import('../view/Main'))


export default class RouteConfig extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {/* <Route path="/home" component={Home} /> */}
                        <Route path="/addGoods" component={AddGoods} />
                        <Route path="/main" component={Main} />
                        <Redirect exact from="/" to="/main" />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}