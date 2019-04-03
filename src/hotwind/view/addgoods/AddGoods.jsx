import React from 'react'
import Select from '../../components/select/Select'
import './addGoods.scss'

export default class AddGoods extends React.Component {
    render() {
        return (
            <div className="addGoods">
                <Select width={220}/>
            </div>
        )
    }
}