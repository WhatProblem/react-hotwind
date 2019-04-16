import React from 'react'
import Table from '../../components/table/Table'
import Dialog from '../../components/dialog/Dialog'
import Select from '../../components/select/Select'
import Input from '../../components/input/Input'
import InputFile from '../../components/inputFile/InputFile'
import $http from '../../http'
import './editGoods.scss'

export default class EditGoods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
            show: false,
            list: [],
            titleList: [
                {
                    label: "商品名称",
                    prop: "goods_name",
                    width: 200
                },
                {
                    label: "商品价格",
                    prop: "goods_price",
                    width: 180
                },
                {
                    label: "商品折扣",
                    prop: "goods_discount",
                    width: 180
                },
                {
                    label: "商品颜色",
                    prop: "goods_color",
                    width: 180
                },
                {
                    label: "商品编码",
                    prop: "barcode",
                    width: 180
                },
                {
                    label: "新品",
                    prop: "isnew",
                    width: 180
                },
                {
                    label: "包邮",
                    prop: "mail_free",
                    width: 180
                },
                {
                    label: "立减",
                    prop: "cut_now",
                    width: 180
                },
                {
                    label: "促销类型",
                    prop: "sale_type",
                    width: 180
                },
                {
                    label: "男/女",
                    prop: "type_id",
                    width: 180
                },
            ],
            resConfig: null, // 配置项
            sexOption: {}, // 性别
            categoryOption: {}, // 选择商品类型
            goodsOption: null, // 商品类型
        }
    }
    /**
    * Note: 查询商品列表
    * @pages{当前页}
    * @offsets{查询条数}
    */
    getGoods = () => {
        let param = { pages: 1, offsets: 10 }
        $http.get('getGoods', param).then(res => {
            if (res.data.status === 200) {
                let resp = this.dealData(JSON.parse(JSON.stringify(res.data.data)))
                this.setState({
                    goodsList: res.data.data,
                    list: resp
                })
            }
        })
        // 查询配置信息
        $http.get('goodsConfig').then((res) => {
            if (res.data.status === 200) {
                this.setState({
                    resConfig: res.data.data
                });
            }
        })
    }
    dealData = (resp) => {
        resp.forEach((item, i) => {
            if (item.type_id == 0) {
                item.type_id = '女装'
            } else {
                item.type_id = '男装'
            }
            if (item.isnew == 0) {
                item.isnew = '否'
            } else {
                item.isnew = '是'
            }
            if (!item.cut_now) {
                item.cut_now = '无满减'
            }
            if (!item.mail_free) {
                item.cut_now = '不包邮'
            }
            if (item.sale_type == 0) {
                item.sale_type = '无活动'
            } else if (item.sale_type == 1) {
                item.sale_type = '打折'
            } else if (item.sale_type = '2') {
                item.sale_type = '店铺促销'
            } else if (item.sale_type = '3') {
                item.sale_type = '优惠福利'
            } else if (item.sale_type = '4') {
                item.sale_type = '商城热销款'
            }
        })
        return resp
    }
    componentWillMount() {
        this.getGoods();
    }

    /**
    * Note: 删除指定商品
    * @id{商品id}
    */
    delTable = (option) => {
        let param = { id: option.id, barcode: option.barcode }
        $http.delete('delGoods', param).then(res => {
            console.log(res)
        })
    }

    /**
    * Note: 需要编辑的数据
    */
    editTable = (option) => {
        let editOtion = null
        for (let opt of this.state.goodsList) {
            if (opt.id === option.id) {
                editOtion = opt
                break
            }
        }
        this.setState({
            show: true,
            sexOption: { type_id: editOtion.type_id, name: editOtion.type_id ? '男' : '女' }
        })
        if (editOtion.type_id == 0) {
            console.log(option)
            console.log(editOtion)
            this.setState({
                categoryOption: { category_type: editOtion.category_type, name: this.state.resConfig.category[0]['list'][editOtion.category_type]['name'] },
                goodsOption: this.state.resConfig.category[0]
            })
        } else if (editOtion.type_id == 1) {
            this.setState({
                categoryOption: { category_type: editOtion.category_type, name: this.state.resConfig.category[1]['list'][editOtion.category_type]['name'] },
                goodsOption: this.state.resConfig.category[1]
            })
        }
    }

    confirm = (opt) => {
        this.setState({
            show: false
        })
    }
    closeDialog = (opt) => {
        console.log(opt)
        this.setState({
            show: false
        })
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
    render() {
        console.log(this.state.categoryOption)
        return (
            <div className="editGoods">
                <div className="editTable">
                    <Table columns={this.state.titleList} onDel={this.delTable.bind(this)} onEdit={this.editTable.bind(this)} align="center" data={this.state.list} />
                </div>
                <Dialog visible={this.state.show} width={880} onConfirm={this.confirm.bind(this)} onCancel={this.closeDialog.bind(this)}>
                    {this.state.resConfig && <Select options={this.state.resConfig.male_type} width={240} name={'name'} placeholder={'请选择性别'} onClick={this.select.bind(this, 'sex')} value={this.state.sexOption.name} />}
                    {this.state.resConfig && this.state.show && <Select options={this.state.goodsOption.list} width={240} name={'name'} placeholder={'请选择商品类型'} onClick={this.select.bind(this, 'category')} value={this.state.categoryOption.name} />}
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Select />
                    <Input />
                    <Select />
                    <Select />
                    <InputFile />
                </Dialog>
            </div>
        )
    }
}