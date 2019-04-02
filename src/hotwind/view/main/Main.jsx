import React, { lazy } from 'react'
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import { addRoute } from "../../store/action";
import store from '../../store'
import RouteWithSubRoutes from '../../Routes/RouteWithSubRoutes'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './main.scss'
const NotFound = lazy(() => import('../notfound/NotFound'))

class Main extends React.Component {
    componentWillReceiveProps() {
        // console.log(this.props)
        const { location, routes } = this.props
        this.props.addRoute(location.pathname);
        // console.log(store.getState().tagViews);
    }
    componentDidMount() {
        // console.log(456)
    }

    render() {
        const { location, routes } = this.props
        return (
            <div className="hotwind">
                <div className="sidebar">
                    <Sidebar></Sidebar>
                </div>
                <div className="content">
                    <Navbar className="navbar" />
                    <div className="containers">
                        <Switch>
                            {
                                routes.map((route, i) => {
                                    return <RouteWithSubRoutes key={i} {...route} />
                                })
                            }
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    tagViews: state.tagViews
})

const mapDispatchToProps = dispatch => ({
    addRoute: routeStatus => dispatch(addRoute(routeStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)