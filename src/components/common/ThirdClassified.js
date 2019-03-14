import React from 'react'
import { Card } from 'antd'

const classfieds = [
    { item: "不限分类", num: "23", selected: true },
    { item: "java", num: "23", selected: false },
    { item: "php", num: "8", selected: false },
    { item: "python", num: "7", selected: false },
    { item: "C/C++", num: "10", selected: false },
    { item: "Ruby", num: "5", selected: false },
    { item: "R语言", num: "7", selected: false },
    { item: "Node.js", num: "3", selected: false },
    { item: "Perl", num: "10", selected: false },
    { item: "Shell", num: "5", selected: false },
    { item: "VB", num: "7", selected: false },
    { item: "ASP", num: "3", selected: false },
    { item: "C#", num: "10", selected: false }
]

class ThirdClassified extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classfieds: classfieds,
        }
    }

    //点击分类
    onClick = (index) => {
        let classfieds1 = this.state.classfieds
        classfieds1.forEach((item) => item.selected = false)
        classfieds1[index].selected = true;
        this.setState({
            classfieds: classfieds1
        })
    }


    render() {

        return (
            <Card  style={{ width: '100%', marginBottom: '15px' }}>


                {classfieds.map((item, index) => {
                    return <li key={item.item} className='Third-li '
                        onClick={() => this.onClick(index)}>
                        <a title={item.item} 
                           className="text-ellipsis" 
                           style={{ color: item.selected ? "#1abc9c":'#555' , fontWeight: item.selected ? "700" : "" }}>
                            {`${item.item}(${item.num})`}
                        </a>
                    </li >
                })
                }

                <style jsx='true' global='false'>{`
                        .Third-li {
                            float: left;
                            margin-right: 10px;
                            list-style: none;
                            padding: 0px;
                            font-size:16px;
                            font-family: Lato,Helvetica,Arial,sans-serif;/**替代ant字体**/
                        }
                        .Third-li a {
                            text-decoration:none;
                        }
                        
                        .Third-li a:hover {
                            color: #1abc9c;
                        }
                        .ant-card-bordered {
                            border: none; 
                        }
                        `}</style>


            </Card>


        )
    }

}



export default ThirdClassified 