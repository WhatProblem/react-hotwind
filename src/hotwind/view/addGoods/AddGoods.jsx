import React from 'react'
import Select from '../../components/select/Select'
import Input from '../../components/input/Input'
import InputFile from '../../components/inputFile/InputFile'
import $http from '../../http'
import './addGoods.scss'

export default class AddGoods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resConfig: null, // 返回配置数据
            goodsOption: [], // 商品类型
            sexOption: {}, // 性别
            categoryOption: {}, // 选择商品类型
            goodsName: '', // 商品名称
            goodsPrice: '', // 商品价格
            goodsColor: '', // 商品颜色
            goodsDiscount: '', // 商品折扣
            saleInfo: {}, // 促销类型
            saleInfoName: '', // 促销类型名称--placeholder部分
            saleInfoVal: '', // 促销类型名称
            inputPermit: false, // 不允许输入促销类型名称
            isNewOption: {}, // 是否是新品
            onsaleFlag: {}, // 活动标识
            inputFile: '', // 输入文件
        }
    }
    select = (optionState, opt) => {
        if (optionState === 'sex') {
            this.setState({
                sexOption: opt,
                categoryOption: {}
            })
            if (opt.type_id === 0) {
                this.setState({
                    goodsOption: this.state.resConfig.category[0]
                })
            } else {
                this.setState({
                    goodsOption: this.state.resConfig.category[1]
                })
            }
        } else if (optionState === 'category') {
            this.setState({
                categoryOption: opt
            })
        } else if (optionState === 'saleInfo') {
            this.setState({
                saleInfo: opt
            })
            if (opt.onsale_info === 0) {
                this.setState({
                    saleInfoName: opt.name,
                    inputPermit: false
                })
            } else {
                this.setState({
                    saleInfoName: opt.name,
                    inputPermit: true
                })
            }
        } else if (optionState === 'onsaleFlag') {
            this.setState({
                onsaleFlag: opt
            })
        } else if (optionState === 'isNewOption') {
            this.setState({
                isNewOption: opt
            })
        }
    }
    change = (inputState, value) => {
        if (inputState === 'goodsName') {
            this.setState({
                goodsName: value
            })
        } else if (inputState === 'goodsPrice') {
            this.setState({
                goodsPrice: value
            })
        } else if (inputState === 'goodsColor') {
            this.setState({
                goodsColor: value
            })
        } else if (inputState === 'goodsDiscount') {
            this.setState({
                goodsDiscount: value
            })
        } else if (inputState === 'saleInfoVal') {
            this.setState({
                saleInfoVal: value
            })
        } else if (inputState === 'upload') {
            this.setState({
                inputFile: value
            })
        }
    }
    submit = () => {
        $http.post('upload',this.state.inputFile.files).then((res)=>{
            console.log(res)
        })
    }

    delFile = () => {
        this.setState({
            inputFile: {}
        })
    }

    componentWillMount() {
        $http.get('goodsConfig').then((res) => {
            if (res.data.status === 200) {
                this.setState({
                    resConfig: res.data.data
                });
            }
        })
    }
    render() {
        return (
            this.state.resConfig && <div className="addGoods">
                <Select options={this.state.resConfig.male_type} width={240} name={'name'} placeholder={'请选择性别'} onClick={this.select.bind(this, 'sex')} value={this.state.sexOption.name} />
                <Select options={this.state.goodsOption.list} width={240} name={'name'} placeholder={'请选择商品类型'} onClick={this.select.bind(this, 'category')} value={this.state.categoryOption.name} />
                <Input width={240} placeholder={'请输入商品名称'} onChange={this.change.bind(this, 'goodsName')} value={this.state.goodsName} type={'text'} disabled={false} />
                <Input width={240} placeholder={'请输入商品价格'} onChange={this.change.bind(this, 'goodsPrice')} value={this.state.goodsPrice} type={'number'} disabled={false} />
                <Input width={240} placeholder={'请输入商品颜色'} onChange={this.change.bind(this, 'goodsColor')} value={this.state.goodsColor} type={'text'} disabled={false} />
                <Input width={240} placeholder={'请输入优惠折扣金额'} onChange={this.change.bind(this, 'goodsDiscount')} value={this.state.goodsDiscount} type={'number'} disabled={false} />
                <Select options={this.state.resConfig.sale_info} width={240} name={'name'} placeholder={'请选择促销类型'} onClick={this.select.bind(this, 'saleInfo')} value={this.state.saleInfo.name} />
                <Input width={240} placeholder={this.state.saleInfoName || '未选择促销类型'} onChange={this.change.bind(this, 'saleInfoVal')} value={this.state.saleInfoVal} type={'text'} disabled={!this.state.inputPermit} />
                <Select options={this.state.resConfig.new_product} width={240} name={'name'} placeholder={'请选择是否是新品'} onClick={this.select.bind(this, 'isNewOption')} value={this.state.isNewOption.name} />
                <Select options={this.state.resConfig.sale_ornot} width={240} name={'name'} placeholder={'请选择活动类型标识'} onClick={this.select.bind(this, 'onsaleFlag')} value={this.state.onsaleFlag.name} />
                <InputFile width={240} placeholder={'请选择上传图片'} accept={'image/jpeg,image/jpg,image/png'} onDelFile={this.delFile.bind(this)} onChange={this.change.bind(this, 'upload')} value={this.state.inputFile} type={'file'} />
                <button onClick={this.submit.bind(this)}>提交</button>
            </div>
        )
    }
}