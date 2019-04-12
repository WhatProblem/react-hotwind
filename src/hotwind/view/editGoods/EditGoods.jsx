import React from 'react'
import Table from '../../components/table/Table'
import $http from '../../http'
import './editGoods.scss'

export default class EditGoods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
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
            ]
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
                let resp = this.dealData(res.data.data)
                this.setState({
                    goodsList: res.data.data,
                    list: resp
                })
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

    delTable = () => {
        console.log('删除')
    }
    editTable = () => {
        console.log('编辑')
    }
    render() {
        return (
            <div className="editGoods">
                <div className="editTable">
                    <Table columns={this.state.titleList} onDel={this.delTable.bind(this)} onEdit={this.editTable.bind(this)} align="center" data={this.state.list} />
                </div>
            </div>
        )
    }
}