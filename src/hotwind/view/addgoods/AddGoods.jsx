import React from 'react'
import Select from '../../components/select/Select'
import Input from '../../components/input/Input'
import $http from '../../http'
import './addGoods.scss'

export default class AddGoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: '',
            inputValue: '',
            sexType: []
        }
    }
    select = (opt) => {
        this.setState({
            selectValue: opt.name
        })
    }
    change = (opt, value) => {
        this.setState({
            inputValue: value
        })
    }
    submit = () => {

    }

    componentWillMount() {
        $http.get('goodsConfig').then((res) => {
            if (res.data.status === 200) {
                this.setState({
                    sexType: res.data.data.male_type
                });
            }
        })
    }
    render() {
        return (
            <div className="addGoods">
                <Select options={this.state.sexType} width={240} name={'name'} placeholder={'请选择性别'} onClick={this.select.bind(this)} value={this.state.selectValue} />
                <Select options={this.state.sexType} width={240} name={'sex'} placeholder={'请选择商品类型'} onClick={this.select.bind(this)} value={this.state.selectValue} />
                <Input width={240} placeholder={'请输入商品名称'} onChange={this.change.bind(this, 'inputValue')} value={this.state.inputValue} type={'number'} disabled={false} />
                <Input width={240} placeholder={'请输入商品价格'} onChange={this.change.bind(this, 'inputValue')} value={this.state.inputValue} type={'number'} disabled={false} />
                <Input width={240} placeholder={'请输入商品颜色'} onChange={this.change.bind(this, 'inputValue')} value={this.state.inputValue} type={'number'} disabled={false} />
                <Input width={240} placeholder={'请输入商品折扣价'} onChange={this.change.bind(this, 'inputValue')} value={this.state.inputValue} type={'number'} disabled={false} />
                <Input width={240} placeholder={'请输入商品名称'} onChange={this.change.bind(this, 'inputValue')} value={this.state.inputValue} type={'number'} disabled={false} />
                <Select options={this.state.sexType} width={240} name={'sex'} placeholder={'请选择促销类型'} onClick={this.select.bind(this)} value={this.state.selectValue} />
                <Select options={this.state.sexType} width={240} name={'sex'} placeholder={'请选择是否是新品'} onClick={this.select.bind(this)} value={this.state.selectValue} />
                <Select options={this.state.sexType} width={240} name={'sex'} placeholder={'请选择商品活动类型'} onClick={this.select.bind(this)} value={this.state.selectValue} />
                <button onClick={this.submit.bind(this)}>提交</button>
            </div>
        )
    }
}