import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card } from 'antd';

import Swiper from '../common/Swiper'
import UserInfo from '../common/UserInfo'
import ClassifyBar from '../common/ClassifyBar'
import ClassifyCard from '../common/ClassifyCard'


const classifyList = [
    {
        name: "编程开发",
        key: 'bckf',
        children: [
            { name: "前端开发", key: 'qdkf' },
            { name: "后端开发", key: 'hdkf' },
            { name: "移动开发", key: 'ydkf' },
            { name: "游戏开发", key: 'yxkf' },
            { name: "硬件开发", key: 'yjkf' },
            { name: "开发工具", key: 'kfgj' },
            { name: "开发测试", key: 'kfcs' }
        ]
    },
    {
        name: "系统运维",
        key: 'xtyw',
        children: [
            { name: "架构", key: 'jg' },
            { name: "服务器", key: 'fwq' },
            { name: "操作系统", key: 'czxt' },
            { name: "网络/安全", key: 'wlaq' },
            { name: "考试认证", key: 'ksrz' }
        ]
    },
    {
        name: "设计·创作",
        key: 'sjcz',
        children: [
            { name: "UI设计", key: 'uisj' },
            { name: "平面设计", key: 'pmsj' },
            { name: "设计软件", key: 'sjrj' },
            { name: "游戏动画", key: 'yxdh' },
            { name: "绘画创作", key: 'hhcz' },
            { name: "影视后期", key: 'yshq' },
            { name: "环艺设计", key: 'hysj' }
        ]
    },
    {
        name: "云计算·大数据",
        key: 'yjsdsj',
        children: [
            { name: "云计算", key: 'yjs' },
            { name: "大数据", key: 'dsj' },
            { name: "数据库", key: 'sjk' },
            { name: "云平台", key: 'ypt' },
            { name: "人工智能", key: 'rgzn' }
        ]
    }
]


@connect(state => {
    const { animation } = state
    return { animation }
})
class FrontHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        this.animation = this.props.animation.name;
        // console.log('this.animation',this.animation)
        return (
            <div >
                <div className='container' >
                    <Row>
                        <Col span={18}>
                            <Swiper />
                        </Col>
                        <Col span={6}>
                            <UserInfo />
                        </Col>
                    </Row >
                </div>
                <div className='classifybar-container' >
                    <div className='container' >
                        {classifyList.map((item) => <ClassifyBar key={item.name} classify={item} />)}
                    </div>
                </div>

                <div className='container' >
                    <Row gutter={16} style={{ marginBottom: '16px' }}>
                        <Col span={12}>
                            <ClassifyCard key={1}/>
                        </Col>
                        <Col span={12}>
                            <ClassifyCard key={2}/>
                        </Col>
                    </Row >
                    <Row gutter={16} style={{ marginBottom: '16px' }}>
                        <Col span={12}>
                            <ClassifyCard key={3}/>
                        </Col>
                        <Col span={12}>
                            <ClassifyCard key={4}/>
                        </Col>
                    </Row >
                    <Row gutter={16} style={{ marginBottom: '16px' }}>
                        <Col span={12}>
                            <ClassifyCard key={5}/>
                        </Col>
                        <Col span={12}>
                            <ClassifyCard key={6}/>
                        </Col>
                    </Row >
                </div>
            </div>

        )
    }

}

export default FrontHome