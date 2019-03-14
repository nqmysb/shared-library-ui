import React from 'react'
import { Card } from 'antd'

import word_s from './imgs/word_s.png'
// import word_l from './imgs/word_l.png'
import pdf_s from './imgs/pdf_s.png'
// import pdf_l from './imgs/pdf_l.png'
// import slt1 from './imgs/slt1.jpg'
// import slt2 from './imgs/slt2.jpg'


class TopCharts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {

        return (
            <Card title={<div><strong>热门资源</strong></div>} bordered={false} style={{ width: '100%'}}>

                <ul className='top-ul'>
                    <li className='top-li'>
                        <img alt="pdf文档" src={pdf_s} />
                        <a href="#" target="_blank" title="TypeScript 官方文档">
                            TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={word_s} />
                        <a href="#" target="_blank" title="TypeScript 官方文档">
                            TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={pdf_s} />
                        <a href="#" target="_blank" title="2018北京市朝阳区高三(一模)文综_16 TypeScript 官方文档">
                            2018北京市朝阳区高三(一模)文综_16 TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={word_s} />
                        <a href="#" target="_blank" title="TypeScript 官方文档">
                            TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={pdf_s} />
                        <a href="#" target="_blank" title="TypeScript 官方文档">
                            TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={word_s} />
                        <a href="#" target="_blank" title="TypeScript 官方文档">
                            TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={pdf_s} />
                        <a href="#" target="_blank" title="2018北京市朝阳区高三(一模)文综_16 TypeScript 官方文档">
                            2018北京市朝阳区高三(一模)文综_16 TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={word_s} />
                        <a href="#" target="_blank" title="TypeScript 官方文档">
                            TypeScript 官方文档</a>
                    </li>

                    <li className='top-li'>
                        <img alt="pdf文档" src={pdf_s} />
                        <a href="#" target="_blank" title="2018北京市朝阳区高三(一模)文综_16 TypeScript 官方文档">
                            2018北京市朝阳区高三(一模)文综_16 TypeScript 官方文档</a>
                    </li>
                </ul>
                <style jsx='true' global='false'>{`
                        .top-li {
                            display: block;
                            border-bottom: 1px dashed #EFEFEF;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            line-height: 240%;
                            font-size: 16px;
                            font-family: Lato,Helvetica,Arial,sans-serif;/**替代ant字体**/
                        }

                        .top-li > img{
                            height: 18px;
                            position: relative;
                            top: -2px;
                            margin-right: 5px;
                            vertical-align: middle;
                        }

                        .top-li a {
                            font-size: 16px;
                        }
                  
                        .top-ul {
                            display: block;
                            list-style-type: disc;
                            margin-block-start: 0;
                            margin-block-end: 0;
                            margin-inline-start: 0px;
                            margin-inline-end: 0px;
                            padding-inline-start: 0;
                            padding-bottom: 5px;
                        }

                        .top-li  a {
                            text-decoration:none;
                        }
                        
                        .top-li  a:hover {
                            color: #1abc9c;
                        }
   
                    
                        `}</style>


            </Card>


        )
    }

}



export default TopCharts 