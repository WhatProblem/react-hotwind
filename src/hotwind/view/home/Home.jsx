import React from 'react'
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from '../../Routes/RouteWithSubRoutes'

export default class Home extends React.Component {
    render() {
        const { location, routes } = this.props
        return (
            <div>
                {/* Home */}

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