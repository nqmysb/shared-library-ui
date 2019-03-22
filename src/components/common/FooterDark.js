import React from 'react'



//如何固定到底部
const FooterDark = () => (
    <div className="container-fluid footer-dark">
        <div className="container">

            <div className="center">

                <a href="https://liaocan.top" target="_blank" title="关于我们">关于我们</a>

                <a href="https://liaocan.top" target="_blank" title="关于我们">文库协议</a>

                <a href="https://liaocan.top" target="_blank" title="意见反馈">意见反馈</a>

                <a href="https://liaocan.top" target="_blank" title="免责声明">免责声明</a>

                <a href="https://liaocan.top" target="_blank" title="意见反馈">联系我们</a>

            </div>
            <div className="center">
                文库之家&nbsp;&nbsp;©2018&nbsp;<span>|</span><a href="https://liaocan.top" title="站点地图" target="_blank">站点地图</a>
            </div>
            <div className="center">
                <a href="http://www.miitbeian.gov.cn/" target="_blank" rel="nofollow">粤ICP备18004373号-2</a>
            </div>
            <div className="center">
                <small>	Powered By<a href="https://liaocan.top" style={{ color: '#1abc9c' }} target="_blank" title="DocHub">DocHub</a>v2.1
                                  </small>
            </div>
        </div>
        <style jsx='true' global='false'>{`
                        .center {
                            font-size: 13px;
                            line-height: 200%;
                            width: 100%;
                            text-align: center;
                            margin: 8px auto;;
                            position: relative;
                            min-height: 1px;
                            padding-right: 15px;
                            padding-left: 15px;
                            font-family: Lato,Helvetica,Arial,sans-serif;
                        }
                        .center a{
                            font-size: 13px;
                            color: #ffffff;
                            margin: 0px 8px;
                            display: inline-block;
                        }


                        `}</style>
    </div>
)

export default FooterDark 