import React from 'react'
import { Row, Col, Card } from 'antd'

import news from './imgs/cover-news.png'


class ClassifyCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <Card title={<div><strong>编程开发</strong>
                <a href="https://liaocan.top" target="_blank" title="编程开发" className="pull-right text-muted">更多&gt;&gt;</a>
            </div>} bordered={false} style={{ width: '100%' }}>
                <Row>
                    <Col span={10}>

                        <a href="https://liaocan.top" target="_blank" title="Docker — 从入门到实战-BookStack.CN" className="text-ellipsis">
                            <img src={news} />
                        </a>

                    </Col>
                    <Col span={14}>
                        <li className='item-li' style={{ paddingBottom: '2px' }}>
                            <a href="https://liaocan.top" target="_blank" title="Docker — 从入门到实战-BookStack.CN" className="text-ellipsis">
                                Docker — 从入门到实战-BookStack.CN
                    </a>
                        </li >

                        <li className='item-li' style={{ paddingBottom: '2px' }}>
                            <a href="https://liaocan.top" target="_blank" title="MongoDB简明教程" className="text-ellipsis">
                                MongoDB简明教程
                    </a>
                        </li>

                        <li className='item-li' style={{ paddingBottom: '2px' }}>
                            <a href="https://liaocan.top" target="_blank" title="TypeScript 官方文档" className="text-ellipsis">
                                TypeScript 官方文档
                    </a>
                        </li>

                        <li className='item-li' style={{ paddingBottom: '2px' }}>
                            <a href="https://liaocan.top" target="_blank" title="DolphinPHP1.3.0完全开发手册-基于ThinkPHP5.0.20的快速开发框架-05221135" className="text-ellipsis">
                                DolphinPHP1.3.0完全开发手册-基于ThinkPHP5.0.20的快速开发框架-05221135
                    </a>
                        </li>

                        <li className='item-li' style={{ paddingBottom: '2px' }}>
                            <a href="https://liaocan.top" target="_blank" title="ThinkPHP5.1完全开发手册-09081747" className="text-ellipsis">
                                ThinkPHP5.1完全开发手册-09081747
                    </a>
                        </li>
                    </Col>
                </Row >
                <style jsx='true' global='false'>{`
                        .item-li {
                            // padding-bottom: 2px;
                            line-height: 1.5;
                            margin-top: 2px;
                            list-style: none;
                            padding: 0px;
                            font-size:16px;
                            font-family: Lato,Helvetica,Arial,sans-serif;/**替代ant字体**/
                        }

                        .text-ellipsis > img{
                            width: 195px;
                            border: 1px solid #EFEFEF;
                        }

                        .panel-default a.pull-right {
                            font-size: 14px;
                        }
                        .pull-right {
                            float: right;
                        }
                        .text-muted {
                            color: #bdc3c7;
                        }
                        a:hover{
                            color: #16a085;
                        }
                    
                        `}</style>


            </Card>


        )
    }

}



export default ClassifyCard 