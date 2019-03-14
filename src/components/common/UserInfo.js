import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd';

@connect(state => {
    const { animation } = state
    return { animation }
})
class UserInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (

            <div className='user-wrap' >
                <Row>
                    <Col span={24}>
                        <div className="panel">
                            <div className="docnumber-wrap">
                                <div className="docnumber">收录文档</div>
                                <span className="number">59</span>
                            </div>
                            <div className="usernumber-wrap">
                                <div className="docnumber">注册用户</div>
                                <span className="number">45</span>
                            </div>
                        </div>
                        <style jsx='true' global='false'>{`
                        .docnumber-wrap {
                            width: 50%;
                            padding: 0px;
                            display: inline-block;
                            border-right: 1px solid #EFEFEF;  
                        }
                        .usernumber-wrap {
                            width: 50%;
                            padding: 0px;
                            display: inline-block;
                        }  

                        .docnumber {
                            display: block;
                            text-align: center;
                            margin-top: 5px;
                            margin-bottom: 0px;
                            font-size: 14px;
                            color: #6b7a88;
                        }
                        .number {
                            font-family: Lato,Helvetica,Arial,sans-serif;
                            display: block;
                            font-size: 16px;
                            color: #1abc9c;
                            text-align: center;
                        }
                        .login-panel {
                            background-color: white;
                            margin-bottom: 15px;
                            padding: 11px 0px;
                        }
                        .login-wrap {
                            padding:15px 15px 0px 15px;
                        }
                        .login-input {
                            width: 100%;
                            height: 42px;
                            margin-bottom: 20px;
                            border-radius: 4px;
                            font-size: 15px;
                        }
                        .login-button {
                            background-color: #1abc9c;
                            border: 0;
                            border-radius: 4px;
                            width: 100%;
                            height: auto;
                            font-size: 15px;
                            font-weight: 400;
                            padding: 10px 15px;
                            margin-left: 0px;
                        }
                        `}</style>
                    </Col>
                </Row >
                <Row className='login-panel' >
                    <Col span={24}>
                        <div className='login-wrap'>
                            <div style={{ marginTop: '0px' }}>
                                <input type="text" placeholder="请输入登录邮箱" className='searchInput login-input' />
                                <input type="text" placeholder="请输入登录密码" className='searchInput login-input' />
                                <span style={{ display: 'block', width: '100%' }} >
                                    <button type="submit" className='searchButton login-button'>登  录</button>
                                </span>
                            </div>
                            <span style={{ display: 'inline-block', width: '50%', margin: '5px auto' }} >
                                忘记密码？
                                </span>
                            <span style={{ display: 'inline-block', width: '50%', margin: '5px auto', textAlign: 'right' }} >
                                注册会员
                                </span>
                        </div>
                    </Col>
                </Row >
            </div>


        )
    }

}



export default UserInfo 