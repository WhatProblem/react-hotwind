import React from 'react'
import './select.scss'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            inputValue: '', // 选择值
        }
    }

    showOptions = (t, e) => {
        this.setState((prevState, props) => ({
            show: !prevState.show
        }))
    }
    selectOption = (option) => {
        this.setState({
            show: false,
            inputValue: option[this.props.name]
        })
        this.props.onClick(option);
    }
    render() {
        const { options = [], width = 240, placeholder = '请选择内容', value = '', name } = this.props
        return (
            <div style={{ width: width }} className="select">
                <div className="inputSelect" onClick={this.showOptions.bind(this, 123)}>
                    <input style={{ width: width }} placeholder={placeholder} value={value} disabled className="selectInput" type="text" />
                </div>
                <i className={`arrow r-hotwind h-arrow_down ${this.state.show ? 'showOption' : 'hideOption'}`} onClick={this.showOptions.bind(this, 123)}></i>
                {!!options.length && this.state.show && <div className="options">
                    {
                        options.map((option, i) => <div className="option" onClick={this.selectOption.bind(this, option)} key={i}>{option[name]}</div>)
                    }
                </div>}
            </div>
        )
    }
}