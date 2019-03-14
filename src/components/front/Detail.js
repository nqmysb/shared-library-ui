import React from 'react'
import { Row, Col } from 'antd';


import ChildClassified from '../common/ChildClassified'
import TopCharts from '../common/TopCharts'
import DocDetail from '../common/DocDetail'

class Detail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        //获取route中的路径参数
        const { id } = this.props.match.params;
        return (
            <div >
                <div className='container' >
                    <div className='channel' >
                        <Row>
                            <Col span={18}>
                                <DocDetail />
                            </Col>
                            <Col span={6} style={{ paddingLeft: '15px' }} >
                                <ChildClassified changeShowState={this.changeShowState} />
                                <TopCharts />
                            </Col>
                        </Row>
                    </div>
                </div>


                <style jsx='true' global='false'>{`
                        .container {
                            width:90%;
                        }
                        .searchInput {
                            width: 84%;
                        }
                        `}</style>
            </div>


        )
    }

}

export default Detail