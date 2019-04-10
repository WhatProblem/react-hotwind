import React from 'react'
import './message.scss'

export default class Message extends React.Component {
    render() {
        const { tips = '' } = this.props
        return (
            <div className="message">{tips}</div>
        )
    }
}