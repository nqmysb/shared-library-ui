import React from 'react'
import { withRouter } from 'react-router'
import { List, Avatar, Icon } from 'antd';

// import word_s from './imgs/word_s.png'
import word_l from './imgs/word_l.png'
// import pdf_s from './imgs/pdf_s.png'
import pdf_l from './imgs/pdf_l.png'
import slt1 from './imgs/slt1.jpg'
import slt2 from './imgs/slt2.jpg'

const listData = [];
for (let i = 0; i < 23; i++) {
    if (i % 2 === 0) {
        listData.push({
            href: `/detail/${i}`,
            title: `DolphinPHP1.3.0完全开发手册 ${i}`,
            avatar: word_l,
            // description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            slt: slt1,
        });
    } else {
        listData.push({
            href: `/detail/${i}`,
            title: `DolphinPHP1.3.0完全开发手册-基于ThinkPHP5.0.20的快速开发框架-05221135 ${i}`,
            avatar: pdf_l,
            // description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'design principles, ,practical patterns , practical pattern and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            slt: slt2,
        });
    }

}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);
@withRouter
class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    toDetail = (href) => {
        const { history } = this.props;
        history.push(href);
    }


    render() {

        return (
            <List
                style={{ background: 'white', padding: '4px 15px 30px 15px' }}
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 22,
                }}
                dataSource={listData}
                footer={<div><b>ant design</b> footer part</div>}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />, <p>时间：2018-12-09</p>]}
                        extra={<img width={98} alt="logo" src={item.slt} style={{ border: 'solid 1px rgb(204, 204, 204)' }} />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar shape="square" src={item.avatar} />}
                            title={<a href="#" onClick={() => this.toDetail(item.href)}>{item.title}</a>}
                        // description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}

            />

        )
    }

}



export default CardList 