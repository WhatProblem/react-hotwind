import React from 'react'
import './table.scss'

export default class Table extends React.Component {
    dealData = (columns, data) => {
        let propArr = []
        let resData = []
        columns.forEach((item, i) => {
            let { prop } = item
            propArr.push(prop)
        })
        data.forEach((item, i) => {
            let newObj = {}
            propArr.forEach((items, index) => {
                newObj[items] = item[items]
            })
            resData.push(newObj)
        })
        return resData
    }
    del = () => {
        if (this.props.onDel) {
            this.props.onDel()
        }
    }
    edit = () => {
        if (this.props.onEdit) {
            this.props.onEdit()
        }
    }
    render() {
        const { columns, data, width = '720', align = 'center', defaultWidth = '120', dosign = true } = this.props
        const datas = this.dealData(columns, data)
        let wid = 208
        columns.forEach((item, i) => {
            if (!item.width) {
                item.width = defaultWidth
            }
            wid += item.width
        })
        return (
            <div className="table" style={{ width: wid + 'px' }}>
                <div className="tableHeader">
                    <table cellSpacing="0" cellPadding="0" border="0" className="htable">
                        <colgroup>
                            {
                                columns.map((item, i) =>
                                    <col width={item.width || defaultWidth} key={i} style={{ width: item.width || defaultWidth }} />
                                )
                            }
                            {dosign && <col style={{ width: '160px' }} />}
                        </colgroup>
                        <thead className="thead">
                            <tr className="rhead">
                                {
                                    columns.map((item, i) =>
                                        <th className="thtitle" colSpan='1' rowSpan='1' key={item.prop}>
                                            <div className="htitle" style={{ textAlign: align }}>{item.label}</div>
                                        </th>)
                                }
                                {dosign && <th className="thtitle" colSpan='1' rowSpan='1'>
                                    <div className="htitle" style={{ textAlign: align }}>操作</div>
                                </th>}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tableContent">
                    <table cellSpacing="0" cellPadding="0" border="0" className="ctable">
                        <colgroup>
                            {
                                columns.map((item, i) =>
                                    <col width={item.width || defaultWidth} key={i} style={{ width: item.width || defaultWidth }} />
                                )
                            }
                            {dosign && <col style={{ width: '160px' }} />}
                        </colgroup>
                        <tbody>
                            {
                                datas.map((items, index) => <tr key={index} className="ctr">
                                    {
                                        Object.keys(items).map((idx, isd) =>
                                            <td className="thtitle" key={idx}>
                                                <div className="htitle" style={{ textAlign: align }} title={items[idx]}>{items[idx]}</div>
                                            </td>)
                                    }
                                    {dosign && <td className="thtitle">
                                        <div className="htitles">
                                            <button className="edit" onClick={this.edit.bind(this)}>编辑</button>
                                            <button className="delete" onClick={this.del.bind(this)}>删除</button>
                                        </div>
                                    </td>}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}