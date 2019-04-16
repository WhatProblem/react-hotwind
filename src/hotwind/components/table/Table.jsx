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
            let newObj = item
            propArr.forEach((items, index) => {
                newObj[items] = item[items]
            })
            resData.push(newObj)
        })
        return resData
    }
    del = (items) => {
        if (this.props.onDel) {
            this.props.onDel(items)
        }
    }
    edit = (items) => {
        if (this.props.onEdit) {
            this.props.onEdit(items)
        }
    }
    render() {
        const { columns, data, width = '720', align = 'center', defaultWidth = '120', showDo = true, showOrder = true } = this.props
        const datas = this.dealData(columns, data)
        let wid = 288
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
                            {showOrder && <col style={{ width: '80px' }} />}
                            {
                                columns.map((item, i) =>
                                    <col width={item.width || defaultWidth} key={i} style={{ width: item.width || defaultWidth }} />
                                )
                            }
                            {showDo && <col style={{ width: '160px' }} />}
                        </colgroup>
                        <thead className="thead">
                            <tr className="rhead">
                                {showOrder && <th className="thtitle" colSpan='1' rowSpan='1'>
                                    <div className="htitle" style={{ textAlign: align }}>序号</div>
                                </th>}
                                {
                                    columns.map((item, i) =>
                                        <th className="thtitle" colSpan='1' rowSpan='1' key={item.prop}>
                                            <div className="htitle" style={{ textAlign: align }}>{item.label}</div>
                                        </th>)
                                }
                                {showDo && <th className="thtitle" colSpan='1' rowSpan='1'>
                                    <div className="htitle" style={{ textAlign: align }}>操作</div>
                                </th>}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tableContent">
                    <table cellSpacing="0" cellPadding="0" border="0" className="ctable">
                        <colgroup>
                            {showOrder && <col style={{ width: '80px' }} />}
                            {
                                columns.map((item, i) =>
                                    <col width={item.width || defaultWidth} key={i} style={{ width: item.width || defaultWidth }} />
                                )
                            }
                            {showDo && <col style={{ width: '160px' }} />}
                        </colgroup>
                        <tbody>
                            {
                                datas.map((items, index) => <tr key={index} className="ctr">
                                    {showOrder && <td className="thtitle">
                                        <div className="htitle" style={{ textAlign: align }}>{index + 1}</div>
                                    </td>}
                                    {
                                        columns.map((propItem, isd) =>
                                            <td className="thtitle" key={propItem.prop}>
                                                <div className="htitle" style={{ textAlign: align }} title={items[propItem.prop]}>{items[propItem.prop]}</div>
                                            </td>)
                                    }
                                    {showDo && <td className="thtitle">
                                        <div className="htitles">
                                            <button className="edit" onClick={this.edit.bind(this, items)}>编辑</button>
                                            <button className="delete" onClick={this.del.bind(this, items)}>删除</button>
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