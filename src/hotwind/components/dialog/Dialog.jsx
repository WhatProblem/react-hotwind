import React from 'react'
import './dialog.scss'


export default class Dialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showState: true
        }
    }
    closeDialog = () => {
        this.setState({
            showState: false
        })
        this.props.onConfirm({ data: 123 });
    }

    confirmDialog = () => {
        this.setState({
            showState: false
        })
        this.props.onConfirm({ data: 'abcdefg' });
    }

    render() {
        const { width, visible = false } = this.props
        return (
            <div className={`${visible ? 'dialog' : 'hideDialog'}`} >
                <div className={`${visible ? 'content' : 'hideContent'}`} style={{ width: width + 'px' }}>
                    <div className="dialogTitle">
                        <div className="titleName">标题</div>
                        <i className="closeDialog" onClick={this.closeDialog.bind(this)}>X</i>
                    </div>
                    <div className="dialogContainer">
                        <div className="dialogChild">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="dialogFoot">
                        <div className="dialogBtn">
                            <div className="dialogConfirm" onClick={this.confirmDialog.bind(this)}>确定</div>
                            <div className="dialogCancel" onClick={this.closeDialog.bind(this)}>取消</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}