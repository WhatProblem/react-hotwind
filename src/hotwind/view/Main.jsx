import React, { lazy } from 'react'
import { Link, Route, Switch, Redirect } from "react-router-dom";
const NotFound = lazy(() => import('./NotFound'))
const Home = lazy(() => import('./Home'))

export default class Main extends React.Component {
    render() {
        // console.log(this.props)
        const { location, routes } = this.props
        return (
            <div>
                <Link to="/main/home">home</Link>
                <Link to="/main/addgoods">addgoods</Link>
                <Switch>
                    {
                        routes.map((route, i) => {
                            if (location.pathname == '/main') {
                                return <Redirect key={i} to="/main/home" />
                            } else if (route.path == location.pathname) {
                                return <Route key={i} path={route.path} component={route.component} />
                            } else {
                                return null
                            }
                        })
                    }
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}