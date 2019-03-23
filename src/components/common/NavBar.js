import React from 'react'
import { withRouter } from 'react-router'
// import PropTypes from 'prop-types'
import { Row, Col, Menu } from 'antd';
import { library } from '@fortawesome/fontawesome-svg-core' //添加lib可以在任意组件中使用  fa upload
import {
    faUpload,
    faUser,
    faAngleRight,
    faAngleLeft
    // faCoffee
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
    faUpload,
    faUser,
    faAngleRight,
    faAngleLeft
    // faCoffee  
)

@withRouter //让子组件获取history
class NavBar extends React.Component {
    constructor(props) {
        super(props); //必需 不然this.state 报错没有该属性
        this.state = {
            current: 'home',
        }

    }


    handleClick = (e) => {
        // console.log('click ', e ,this.context,this.props.history); //两种方式获取history
        const { history } = this.props;
        this.setState({
            current: e.key,
        });
        if (e.key === 'home') {
            history.push('/frontHome')
        } else {
            history.push(`/list/${e.key}`)
        }


    }



    render() {
        return (
            <div className="nav-container">
                <div className="container">
                    <Row>
                        <Col span={18}>
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                style={{ color: 'white' }}
                            >
                                <Menu.Item key="home" style={"home" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    首页
                                </Menu.Item>
                                <Menu.Item key="it" style={"it" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    IT技术
                                </Menu.Item>

                                <Menu.Item key="project" style={"project" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    项目管理
                                </Menu.Item>
                                <Menu.Item key="english" style={"english" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    英语学习
                                </Menu.Item>
                                <Menu.Item key="human" style={"human" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    地理人文
                                </Menu.Item>
                                <Menu.Item key="life" style={"life" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    生活札记
                                </Menu.Item>
                                <Menu.Item key="history" style={"history" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    历史脉络
                                </Menu.Item>
                                <Menu.Item key="military" style={"military" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    军事爱好
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col span={6} >
                            <Menu
                                onClick={this.handleClick}
                                selectedKeys={[this.state.current]}
                                mode="horizontal"
                                style={{ color: 'white', float: 'right' }}
                            >
                                <Menu.Item key="document" style={"document" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    {/* <FontAwesomeIcon icon="coffee" />  小写*/}
                                    <FontAwesomeIcon icon="upload" /> 上传文档
                                </Menu.Item>

                                <Menu.Item key="center" style={"center" === this.state.current ? { color: 'white', backgroundColor: '#1ABC9C' } : ""}>
                                    <FontAwesomeIcon icon="user" /> 个人中心
                                </Menu.Item>

                            </Menu>
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }

}
//这样可以获取 this.context中获取history
// NavBar.contextTypes = {
//     router: PropTypes.object.isRequired
//   }

export default NavBar 