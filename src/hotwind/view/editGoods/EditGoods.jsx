import React from 'react'
import Table from '../../components/table/Table'
import $http from '../../http'
import './editGoods.scss'

export default class EditGoods extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            columns: [
                {
                    label: "日期",
                    prop: "date",
                    width: 180
                },
                {
                    label: "姓名",
                    prop: "name",
                    width: 180
                },
                {
                    label: "地址",
                    prop: "address",
                    width: 240
                }
            ],
            data: [{
                date: '2016-05-02',
                address: '上海市普陀区金沙江路 1518 弄',
                name: '王小虎',
            }, {
                date: '2016-05-04',
                address: '上海市普陀区金沙江路 1517 弄',
                name: '王小虎',
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    }
    getGoods = () => {
        let param = { pages: 1, offsets: 10 }
        $http.get('getGoods', param).then(res => {
            // console.log(res)
        })
    }
    componentWillMount() {
        this.getGoods();
    }

    delTable = () => {
        console.log('删除')
    }
    editTable=()=>{
        console.log('编辑')
    }
    render() {
        return (
            <div className="editGoods">
                <div className="editTable">
                    <Table columns={this.state.columns} onDel={this.delTable.bind(this)} onEdit={this.editTable.bind(this)} align="left" data={this.state.data} />
                </div>
            </div>
        )
    }
}