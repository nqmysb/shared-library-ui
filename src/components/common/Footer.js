import React from 'react'




const Footer = () => (
    <div className="container-fluid footer">
        <div className="container">
            <div className="footer-title" ><strong>友情链接</strong></div>
            <div className="footer-body">

                <a href="#" target="_blank" title="书栈网">书栈网</a>

                <a href="#" target="_blank" title="掘金量化">掘金量化</a>

                <a href="#" target="_blank" title="南宁引力互动科技">南宁引力互动科技</a>

                <a href="#" target="_blank" title="HC-CMS">HC-CMS</a>

            </div>
        </div>
        <style jsx='true' global='false'>{`
                        .footer-title {
                            padding-right: 15px;
                            padding-left: 15px;
                        }
                        .footer-title  strong{
                            color: rgb(52, 73, 94);
                            line-height: 1.72222;
                            font-size:18px;
                            font-family: Lato,Helvetica,Arial,sans-serif;
                            font-weight: 700;
                        }
                        .footer-body {
                            padding-right: 15px;
                            padding-left: 15px;
                            margin-bottom: 5px;
                            margin-top: 5px;
                        }
            
                        .footer-body > a{
                            text-decoration: none;
                            display: inline-block;
                            margin-right: 15px;
                            line-height: 200%;
                        }
                    
                        `}</style>
    </div>

)

export default Footer 