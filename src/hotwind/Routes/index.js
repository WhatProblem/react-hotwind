import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route, Redirect, } from "react-router-dom"

import { routes } from './routeConfig'
import RouteWithSubRoutes from './RouteWithSubRoutes'

export default class RouteConfig extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {routes.map((route, i) => {
                            return <RouteWithSubRoutes key={i} {...route} />
                        })}
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}