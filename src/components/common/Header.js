import React from 'react'
import { Row, Col } from 'antd';

import logo from './imgs/logo.png'


const Header = () => (
    <div className="container-fluid">
        <div className="container">
            <Row>
                <Col span={12}>
                    <div>
                        <a href="/" title="共享文库">
                            <img alt="共享文库" className="wenku-logo" src={logo} />
                        </a>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{ marginTop: '20px' }}>
                        <input type="text" placeholder="请输入搜索关键字" className='searchInput' />
                        <span style={{ display: 'inline-block', width: '100px' }} >
                            <button type="submit" className='searchButton'> 搜索文档</button>
                        </span>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
)

export default Header 