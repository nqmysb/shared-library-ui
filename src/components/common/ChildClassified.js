import React from 'react'
import { Card } from 'antd'


const classfieds = [
    { item: "不限分类", num: "23", selected: true },
    { item: "前端开发", num: "8", selected: false },
    { item: "后端开发", num: "7", selected: false },
    { item: "游戏开发", num: "10", selected: false },
    { item: "开发工具", num: "5", selected: false },
    { item: "大数据开发", num: "7", selected: false },
    { item: "数据库开发", num: "3", selected: false },
]

class ChildClassified extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classfieds: classfieds,
        }
    }

    //点击分类
    onClick = (index) => {
        //不限分类时 不显示子分类
        index === 0 ? this.props.changeShowState(false) : this.props.changeShowState(true)
        let classfieds1 = this.state.classfieds
        classfieds1.forEach((item) => item.selected = false)
        classfieds1[index].selected = true;
        this.setState({
            classfieds: classfieds1
        })
    }


    render() {

        return (
            <Card title={<div><strong>编程开发</strong></div>} bordered={false} style={{ width: '100%', marginBottom: '15px' }}>


                {classfieds.map((item, index) => {
                    return <li key={item.item} className='item-li'
                        style={{ display: 'inline-block', width: '50%' }}
                        onClick={() => this.onClick(index)}>
                        <a title={item.item} className="text-ellipsis" style={{ color: item.selected ? "#1abc9c" : '#555', fontWeight: item.selected ? "700" : "" }}>
                            {`${item.item}(${item.num})`}
                        </a>
                    </li >
                })
                }



                <style jsx='true' global='false'>{`
                        .item-li {
                            // padding-bottom: 2px;
                            line-height: 1.5;
                            // margin-top: 2px;
                            list-style: none;
                            padding: 0px;
                            font-size:16px;
                            font-family: Lato,Helvetica,Arial,sans-serif;/**替代ant字体**/
                        }
                        .item-li a {
                            text-decoration:none;
                        }
                        
                        .item-li a:hover {
                            color: #1abc9c;
                        }
                        
                        `}</style>


            </Card>


        )
    }

}



export default ChildClassified 