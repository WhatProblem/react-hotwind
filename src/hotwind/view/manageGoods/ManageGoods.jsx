import React from 'react'
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from '../../Routes/RouteWithSubRoutes'
import './manageGoods.scss'

export default class ManageGoods extends React.Component {
    render() {
        const { location, routes } = this.props
        return (
            <div className="manageGoods">
                <Switch>
                    {
                        routes.map((route, i) => {
                            return <RouteWithSubRoutes key={i} {...route} />
                        })
                    }
                    {/* <Route component={NotFound} /> */}
                </Switch>
            </div>
        )
    }
}