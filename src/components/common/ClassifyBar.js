import React from 'react'


class ClassifyBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        const { classify } = this.props;

        return (
            <div style={{ width: '25%', display: 'inline-block', position: 'relative', minHeight: '1px', paddingRight: '15px', paddingLeft: '15px' }} >
                <div style={{ marginTop: '10px', marginBottom: '10px', fontSize: '28px', fontWeight: 700, lineHeight: '1.1', color: 'rgb(52, 73, 94)' }}>{classify.name}</div>
                <div style={{ width: '100%', height: "60px" }}>
                    {classify.children.filter((item, index) => index < 6).map((item) => {
                        return < a key={item.name} href="#" style={{
                            display: 'inline-block',
                            fontSize: '16px',
                            marginRight: '5px',
                            textDecoration: 'none'
                        }}>
                            {item.name}
                        </a>
                    })
                    }
                </div>
                <style jsx='true' global='false'>{`
                        a {
                            color: #555;
                            cursor: pointer;
                        }
                        a:hover, a:focus {
                            color: #1abc9c;
                            text-decoration: none;
                        }
                    
                        `}</style>
            </div >


        )
    }

}



export default ClassifyBar 