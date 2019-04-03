import React from 'react'
import $http from '../../http'
import './home.scss'

export default class Home extends React.Component {
    componentWillMount() {
        $http.get('test').then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="home">home</div>
        )
    }
}