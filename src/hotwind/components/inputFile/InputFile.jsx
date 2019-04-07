import React from 'react'
import './inputFile.scss'

export default class InputFile extends React.Component {
    chanageInput = (e) => {
        console.log(789)
        if (this.props.onChange) {
            this.props.onChange(e)
        }
    }
    delFile = () => {
        this.props.onDelFile()
    }
    render() {
        const { width = 240, type = 'file', placeholder = '请输入内容', value = {}, accept = "" } = this.props
        console.log(this.props)
        return (
            <div className="inputFile" style={{ width: width + 'px' }}>
                <div className={`inputTips ${value.name ? 'activeFile' : 'unActiveFile'}`}>{value.name || '未选择文件'}</div>
                {value.name && <i onClick={this.delFile.bind(this)} className="r-hotwind h-del delFile"></i>}
                <input onChange={this.chanageInput.bind(this)} accept={accept} placeholder={placeholder} style={{ width: width + 'px' }} className="myInput" type={type} />
            </div >
        )
    }
}