import React from 'react'
import './input.scss'

export default class Input extends React.Component {
    chanageInput = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }
    keyPress = (type, e) => {
        if (type == 'number') {
            const invalidChars = ['E', 'e', '+', '-']
            if (invalidChars.indexOf(e.key) !== -1) {
                e.preventDefault()
            }
        }
    }
    render() {
        const { width = 240, type = 'text', disabled = false, placeholder = '请输入内容', value = "", step = "0.01", accept = "" } = this.props
        return (
            <div className="input" style={{ width: width + 'px' }}>
                <input onChange={this.chanageInput.bind(this)} onKeyPress={this.keyPress.bind(this, type)} step={step} accept={accept} disabled={disabled} placeholder={placeholder} style={{ width: width + 'px' }} value={value} className="myInput" type={type} />
            </div>
        )
    }
}