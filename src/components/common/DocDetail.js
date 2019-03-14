import React from 'react'
import { withRouter } from 'react-router'

// import word_s from './imgs/word_s.png'
import word_l from './imgs/word_l.png'
// import pdf_s from './imgs/pdf_s.png'
import pdf_l from './imgs/pdf_l.png'
import slt1 from './imgs/slt1.jpg'
import slt2 from './imgs/slt2.jpg'


@withRouter
class DocDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (


            <div className="">
                <style jsx='true' global='false'>{`
                        .panel-body {
                            padding:15px;
                        }
                        `}</style>
                <div className="panel">
                    <div style={{ padding: "15px" }}>
                        <h1 style={{ fontSize: '22px', margin: 0, lineHight: '150%', color: 'rgb(52, 73, 94)', fontWeight: 700, fontFamily: 'Lato, Helvetica, Arial, sans-serif' }}>
                            <img style={{ position: 'relative', width: "24px", top: '-3px' }} alt="docx文档" src={word_l} />
                            &nbsp;验收报告(模板)-2
                        </h1>
                        <div style={{ margin: "5 0" }}>
                            <span>
                                <a href="/list/coding" title="编程开发">编程开发</a> &gt;
								<a href="/list/coding/pid/6" title="前端开发">前端开发</a> &gt;
								<a href="/list/coding/pid/6/cid/46" title="AngularJS">AngularJS</a> &gt;
								<span className="text-muted">文档预览</span>
                            </span>
                            <div >
                                <span title="页数"><i className="fa fa-file-text-o"></i> 6 页</span>
                                <span title="下载"><i className="fa fa-download"></i> 3 下载</span>
                                <span title="浏览"><i className="fa fa-eye"></i> 118 浏览</span>
                                <span title="评论"><i className="fa fa-comments-o"></i> 0 评论</span>
                                <span title="收藏"><i className="fa fa-heart-o"></i> 0 收藏</span>
                                <span title="评分"><i className="wenku-star star-30"></i> 3.0分</span>
                            </div>
                        </div>



                        <div className="help-block wenku-preview-tips">
                            温馨提示：当前文档最多只能预览 <span className="strong text-primary">20</span> 页，若文档总页数超出了 <span className="strong text-primary">20</span> 页，请下载原文档以浏览全部内容。
                    </div>



                        <div className="wenku-viewer" id="wenku-viewer" data-scale="9">


                            <img src="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/1.svg" className="wenku-lazy wenku-viewer-img wenku-page1" data-page="1" alt="验收报告(模板)-2 第 1 页" />



                            <img src="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/2.svg" className="wenku-lazy wenku-viewer-img wenku-page2" data-page="2" alt="验收报告(模板)-2 第 2 页" />



                            <img src="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/3.svg" data-original="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/3.svg" className="wenku-lazy wenku-viewer-img wenku-page3" data-page="3" alt="验收报告(模板)-2 第 3 页" />



                            <img src="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/4.svg" data-original="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/4.svg" className="wenku-lazy wenku-viewer-img wenku-page4" data-page="4" alt="验收报告(模板)-2 第 4 页" />



                            <img src="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/5.svg" data-original="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/5.svg" className="wenku-lazy wenku-viewer-img wenku-page5" data-page="5" alt="验收报告(模板)-2 第 5 页" />




                            <div className="wenku-viewer-more text-center" data-next="6" data-ext="svg" data-svg="https://static.wenkuzhijia.cn/a5d50b40fb4b94b4ebec6d3e2e3f1596/">

                                <div>下载文档到电脑，方便使用</div>
                                <div><a href="javascript:void(0);" className="btn btn-primary" data-toggle="modal" data-target="#ModalDownload"><i className="fa fa-cloud-download"></i> 下载文档</a></div>


                                <a href="javascript:void(0);" className="wenku-viewer-more-btn">
                                    <div className="help-block">

                                        当前文档最多只能预览 20 页 <br />

                                        还有 <span className="wenku-unread-pages">1</span> 页可预览，<span className="text-primary">继续阅读</span>
                                    </div>
                                </a>

                                <div className="help-block"><a href="javascript:void(0);" className="wenku-viewer-more-btn"><i className="fa fa-angle-down"></i></a></div>
                            </div>




                        </div>



                        <div className="help-block">
                            <span>本文档由 <a href="/user/2" target="_blank" title="charlesdxf">charlesdxf</a> 于 <span className="text-muted">2018-09-12 09:19:02</span>上传分享</span>
                        </div>
                        <div className="help-block wenku-action">
                            <div className="pull-left">
                                <a href="javascript:void(0);" data-toggle="modal" data-target="#ModalReport" className="btn btn-primary btn-sm"><i className="fa fa-warning"></i> 举报</a>
                            </div>
                            <div className="pull-right wenku-mgl-15px">
                                <a href="javascript:void(0);" rel="nofollow" data-toggle="modal" data-target="#ModalDownload" target="_blank" className="btn btn-primary btn-sm"><i className="fa fa-cloud-download"></i> 下载<span className="hidden-xs">原文档</span>(19.84 KB)</a>
                            </div>
                            <div className="pull-right">

                                <a href="javascript:void(0);" rel="nofollow" className="btn btn-primary btn-sm wenku-collect"><i className="fa fa-heart-o"></i>  <span>收藏</span></a>

                                <a href="javascript:void(0);" data-toggle="modal" data-target="#ModalShare" className="btn btn-primary btn-sm"><i className="fa fa-share-alt"></i> 分享</a>
                            </div>
                        </div>


                    </div>
                </div>
                {/* <div className="panel panel-default wenku-noborder wenku-comment">
                    <div className="panel-body">
                        <div title="给文档打分">给文档打分
            <span className="wenku-score disabled">
                                <i className="fa fa-star-o" data-v="1"></i>
                                <i className="fa fa-star-o" data-v="2"></i>
                                <i className="fa fa-star-o" data-v="3"></i>
                                <i className="fa fa-star-o" data-v="4"></i>
                                <i className="fa fa-star-o" data-v="5"></i>
                            </span>
                            <span className="wenku-score-tips color-gray"></span>
                        </div>
                        <form role="form" method="post" action="/comment/40" className="wenku-comment-form">
                            <div className="form-group">
                                <textarea name="Comment" rows="3" className="form-control" required="required" placeholder="文明评论，文明你我他"></textarea>
                                <input type="hidden" name="Score" id="score" value="0" />
                            </div>
                            <div className="form-group">
                                <div className="col-xs-3 clearfix wenku-nopadding">
                                    <div className="help-block">您好可以输入 <span className="text-danger wenku-comment-num">255</span> 个字符</div>
                                </div>
                                <div className="col-xs-5 clearfix text-right wenku-answer-tips">
                                    <div className="help-block">文库之家的网址是？( 答案：<span className="text-danger">wenkuzhijia.cn</span> )</div>
                                </div>
                                <input type="hidden" name="_xsrf" value="qVscHbS89dXFkrTypQ3iDKMNvDRmE3Lf" />
                                <div className="col-xs-2 clearfix wenku-nopadding">
                                    <input type="text" name="Answer" required="required" className="form-control" placeholder="请输入答案" />
                                </div>
                                <div className="col-xs-2 wenku-no-pdr clearfix text-right">
                                    <input type="submit" className="btn btn-danger btn-block" value="发表评论" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel panel-default wenku-noborder wenku-comment-list">
                    <div className="panel-heading">评论列表</div>
                    <div className="panel-body">

                        <ul>

                            <li>
                                <div className="help-block">暂时还没有评论，期待您的金玉良言</div>
                            </li>

                        </ul>


                    </div>
                </div> */}


            </div>

        )
    }

}



export default DocDetail 