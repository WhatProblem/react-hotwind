import React from 'react'
import { NavLink } from "react-router-dom"
import { routes } from '../../Routes/routeConfig'
import SubItem from '../subItem/SubItem'
import './sidebar.scss'


export default class Sidebar extends React.Component {
    componentWillMount() {
        const routeList = routes[1]['routes'];
        const menuTreeNode = this.submenu(routeList)
        this.setState({
            menuTreeNode
        })
    }

    submenu = (data) => {
        return data.map((item, i) => {
            if (item.routes) {
                return (
                    <SubItem {...item} key={i}>
                        {this.submenu(item.routes)}
                    </SubItem>
                )
            }
            return (
                <div className="menuItem" key={i}>
                    <NavLink className="navtab" to={item.path} activeClassName="selected">
                        <div className="navTitle"><i className={`r-hotwind ${item.icon}`}></i>{item.name}</div>
                    </NavLink>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="sidebar">
                {this.state.menuTreeNode}
            </div>
        )
    }
}