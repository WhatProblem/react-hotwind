import React, { lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { startHotwind } from "../store/action"
import store from '../store'

class RouteWithSubRoutes extends React.Component {
    componentDidMount() {
        // console.log(this.props)
        // this.props.startHotwind('测试dispatch11111111111111111111111')
        // console.log(store.getState())
        this.props.startHotwind(this.props.location.pathname)
        console.log(store.getState())
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
                            return
                        }
                        if (!loginKey && route.path != '/login') {
                            return <Redirect to="/login" />
                        }
                        if (route.path == '/') {
                            return <Redirect to="/main" />
                        }
                        return <route.component {...props} routes={route.routes} />
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // todos: '测试state添加'
    todos: state
})

const mapDispatchToProps = dispatch => ({
    startHotwind: text => dispatch(startHotwind(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithSubRoutes)

// export default RouteWithSubRoutes