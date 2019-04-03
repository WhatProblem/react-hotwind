import React from 'react'
import './select.scss'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                { type: '1', sex: '男' },
                { type: '0', sex: '女' }
            ],
            show: false
        }
    }

    showOptions = (t, e) => {
        console.log(t)
        console.log(e)
        this.setState((prevState, props) => ({
            show: !prevState.show
        }))
    }
    render() {
        const { width } = this.props
        const options = this.state.list
        return (
            <div style={{ width: width }} className="select">
                <div className="inputSelect" onClick={this.showOptions.bind(this, 123)}>
                    <input style={{ width: width }} placeholder="请选择性别" disabled className="selectInput" type="text" />
                </div>
                <i className={`arrow r-hotwind h-arrow_down ${this.state.show ? 'showOption' : 'hideOption'}`}></i>
                {!!options.length && <div className="options">
                    {
                        options.map((option, i) => <div className="option" data-sets={option.type} key={i}>{option.sex}</div>)
                    }
                </div>}
            </div>
        )
    }
}