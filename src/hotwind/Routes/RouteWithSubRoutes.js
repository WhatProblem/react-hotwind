import React, { lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'

export default class RouteWithSubRoutes extends React.Component {
    componentDidMount() {

    }
    render() {
        const route = this.props
        // console.log(this.props)
        let loginKey = localStorage.getItem('LOGIN_KEY')
        return (
            <div>
                <Route
                    path={route.path}
                    render={props => {
                        if (loginKey && route.path == '/login') {
                            return <Redirect to="/" />
                        }
                        if (!loginKey && route.path != '/login') {
                            return <Redirect to="/login" />
                        }
                        if (route.path == '/') {
                            return <Redirect to="/main/home" />
                        }
                        return <route.component {...props} route={route} routes={route.routes} />
                    }}
                />
            </div>
        )
    }
}
