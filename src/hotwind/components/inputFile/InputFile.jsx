import React from 'react'
import './inputFile.scss'

export default class InputFile extends React.Component {
    constructor(props) {
        super(props)
        this.inputFile = React.createRef();
    }
    chanageInput = (e) => {
        if (this.props.onChange) {
            let formdata = new FormData()
            formdata.append('file', e.target.files[0])
            console.log(formdata)
            let obj = { files: formdata, name: e.target.files[0]['name'] }
            this.props.onChange(obj)
        }
    }
    delFile = () => {
        this.inputFile.current.value = null;
        this.props.onDelFile()
    }
    render() {
        const { width = 240, type = 'file', placeholder = '请输入内容', value = {}, accept = "" } = this.props
        // console.log(this.props)
        return (
            <div className="inputFile" style={{ width: width + 'px' }}>
                <div className={`inputTips ${value.name ? 'activeFile' : 'unActiveFile'}`}>{value.name || '未选择文件'}</div>
                {value.name && <i onClick={this.delFile.bind(this)} className="r-hotwind h-del delFile"></i>}
                <input ref={this.inputFile} onChange={this.chanageInput.bind(this)} accept={accept} placeholder={placeholder} style={{ width: width + 'px' }} className="myInput" type={type} />
            </div >
        )
    }
}