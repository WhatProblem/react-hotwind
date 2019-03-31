import React, { lazy } from 'react'
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import { addRoute } from "../../store/action";
import store from '../../store'
import RouteWithSubRoutes from '../../Routes/RouteWithSubRoutes'
import Sidebar from '../../components/sidebar/Sidebar'
import './main.scss'
const NotFound = lazy(() => import('../notfound/NotFound'))

class Main extends React.Component {
    componentWillReceiveProps() {
        console.log(this.props)
        const { location, routes } = this.props
        this.props.addRoute(location.pathname);
        console.log(store.getState().tagViews);
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
                {/* <Link to="/main/home">home</Link>
                <Link to="/main/addgoods">addgoods</Link> */}
                <div className="content">
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