import React from 'react'
import { NavLink } from "react-router-dom"
import './subItem.scss'

export default class SubItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showMenuItem: false,
            curMeta: null,
        }
    }

    switchShow = (args, e) => {
        // console.log(args)
        // console.log(e)
        this.setState({
            showMenuItem: !this.state.showMenuItem,
            curMeta: args
        })
    }
    render() {
        // console.log(this.props)
        const { name, routes, meta, icon } = this.props;
        return (
            <div className="subItem">
                <div className="subTitle" onClick={this.switchShow.bind(this, meta)}>
                    <div className="navTitle"><i className={`r-hotwind ${icon}`}></i>{name}<i className={`arrow r-hotwind h-arrow_down ${this.state.showMenuItem ? 'showMenu' : 'hideMenu'}`}></i></div>
                </div>
                <ul className={`menuLists ${this.state.curMeta === meta && this.state.showMenuItem ? 'showList' : 'hideList'}`}>
                    {
                        routes.map((item, i) => {
                            return (
                                <div className="menuItem" key={i}>
                                    <NavLink className="navtab" to={item.path} activeClassName="selected">
                                        <div className="navTitleList">{item.name}</div>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}