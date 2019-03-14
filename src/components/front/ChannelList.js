import React from 'react'
import { Row, Col } from 'antd';

import ChildClassified from '../common/ChildClassified'
import TopCharts from '../common/TopCharts'
import CardList from '../common/CardList'
import ThirdClassified from '../common/ThirdClassified'

class ChannelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }
    //是否显示三级分类
    changeShowState = (show) => {
        // console.log('show',show)
        this.setState({
            show
        })
    }


    render() {
        //获取route中的路径参数
        // const { channel } = this.props.match.params;
        return (
            <div >
                <div className='container' >
                    <div className='channel' >
                        <Row>
                            <Col span={16}>
                                {/* {channel} */}
                                {this.state.show && <ThirdClassified />}
                                <CardList />
                            </Col>
                            <Col span={8} style={{ paddingLeft: '15px' }} >
                                <ChildClassified changeShowState={this.changeShowState} />
                                <TopCharts />
                            </Col>
                        </Row>
                    </div>
                </div>


                <style jsx='true' global='false'>{`
                        .channel {
                            width:100%;
                            margin-bottom:40px;
                        }
                        /* CardList样式   style注释*/ 
                        .ant-list-vertical .ant-list-item-extra {
                            margin: 0 0 0 15px;
                        }

                        .ant-list-item-meta-title > a {
                            /*  color: rgba(0, 0, 0, 0.65);*/ 
                            color: #555;
                            transition: all .3s;
                            font-size: 18px;
                            line-height: 24px;
                        }

                        .ant-list-vertical .ant-list-item-meta-title {
                            color: rgba(0, 0, 0, 0.85);
                            margin: 8px 8px;
                            font-size: 16px;
                            line-height: 24px;
                        }
                        .ant-list-vertical .ant-list-item-meta {
                            margin-bottom: 0px;
                            height: 55px;
                            display: table-cell;
                            vertical-align: middle;
                        }

                        .ant-list-item-meta-content {
                            flex: 1 0;
                            vertical-align: middle;
                            display: table-cell;
                            // height: 100%;
                        }

                        .ant-list-item-meta-avatar {
                            // margin-top: 17px;
                            // margin-right: 7px;
                            display: table-cell; /*块级元素垂直方向居中*/
                            vertical-align: middle;
                        }
                        .ant-list-sm .ant-list-item {
                            padding-top: 10px;
                            padding-bottom: 3px;
                        }
                        .ant-list-vertical .ant-list-item-content {
                            display: block;
                            color: rgba(0, 0, 0, 0.65);
                            font-size: 14px;
                            margin: 0 0 10px 0;
                        }
                        `}</style>
            </div>


        )
    }

}

export default ChannelList