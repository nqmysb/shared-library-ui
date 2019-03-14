import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, CSSTransition, Transition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setAnimation } from '../../actions/animation.js'

import banner1 from './imgs/banner1.jpg'
import banner2 from './imgs/banner2.jpg'
import banner3 from './imgs/banner3.jpg'



const banners = [banner1, banner2, banner3]

// const time = new Date();
@connect(state => {
    const { animation } = state
    return { animation }
})
class Swiper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: "toLeft",
            banner: 1,
            time: new Date().getTime(),
            // show: true
        }
    }




    handleClick(playdirection, banner) {
        //判断两次点击之间时间间隔是否大于0.5秒 getMilliseconds() (0-999)
        // console.log('time', new Date().getTime() - this.state.time)
        let time = new Date().getTime()
        if ((time - this.state.time) < 300) {
            return false;
        } else {
            this.setState({ time })
        }
        //回调函数  解决图片轮播左右切换的bug
        // if (this.state.direction != direction) {
        if (banner === this.state.banner) {
            return false;
        }
        let direction = playdirection;

        if (banner || banner === 0) {//注意等于0时 
            direction = banner > this.state.banner ? 'toLeft' : 'toRight'
        }

        this.setState({ direction }, () => { this.changePic(direction, banner) })
        // } else {
        //     this.changePic(direction)
        // }
    }

    changePic(direction, banner) {
        //切换图片时清除定时器 轮播图标的影响
        clearInterval(this.timerID);
        this.props.dispatch(setAnimation(direction))
        if (direction === "toRight") {
            this.setState({
                direction: "toRight",
                banner: (banner || banner === 0) ? banner : (this.state.banner === 2 ? 0 : this.state.banner + 1),
                // show: !this.state.show
            })
        } else {
            this.setState({
                direction: "toLeft",
                banner: (banner || banner === 0) ? banner : (this.state.banner === 0 ? 2 : this.state.banner - 1),
                // show: !this.state.show
            })
        }
        this.timerID = setInterval(() => this.handleClick("toLeft", null), 3000)
    }


    //定时轮播
    componentDidMount() {
        this.timerID = setInterval(() => this.handleClick("toLeft", null), 3000)
    };

    //删除定时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    render() {

        this.animation = this.props.animation.name;
        // console.log('this.animation',this.animation)
        return (
            // 用mouseenter/mouseleave代替mouseover/mouseout【最佳方法】
            <div onMouseEnter={() => this.setState({ showAngle: true })} onMouseLeave={() => this.setState({ showAngle: false })}>
                <TransitionGroup style={{ position: 'relative', width: '100%', height: 316, overflow: 'hidden' }} >
                    <CSSTransition
                        key={`${this.state.banner}`}
                        timeout={300}
                        unmountOnExit={false}
                        classNames={this.state.direction}
                    >
                        <img src={banners[this.state.banner]} />
                    </CSSTransition>

                </TransitionGroup>
                {this.state.showAngle && <div onClick={() => this.handleClick("toLeft", null)} className="angle-div left">
                    <FontAwesomeIcon icon="angle-left" size="2x" className='angle-style' /></div>}
                {this.state.showAngle && <div onClick={() => this.handleClick("toRight", null)} className="angle-div right">
                    <FontAwesomeIcon icon="angle-right" size="2x" className='angle-style' /></div>}


                <ul className="play-nav">
                    <li style={{ backgroundColor: this.state.banner == 0 ? "RGB(26,188,156)" : "#bdc3c7" }} onMouseEnter={() => this.handleClick(null, 0)}></li>
                    <li style={{ backgroundColor: this.state.banner == 1 ? "RGB(26,188,156)" : "#bdc3c7" }} onMouseEnter={() => this.handleClick(null, 1)}></li>
                    <li style={{ backgroundColor: this.state.banner == 2 ? "RGB(26,188,156)" : "#bdc3c7" }} onMouseEnter={() => this.handleClick(null, 2)}></li>
                </ul>
                <style jsx='true' global='false'>{`
                        .angle-div {
                            width: 35px;
                            height: 35px;
                            position: absolute;
                            top: 130px;
                            background-color: RGBA(202,202,202,0.55);
                            z-index: 10000;
                        }
                        .left {
                            left: 0px;
                        }
                        .right {
                            right: 0px; 
                        }
						.angle-style {
                            color: rgba(250, 250, 250, 0.75);
                            height: 35px;
                            width: 35px;
                            line-height: 35px;
                            margin: 0 auto;
                            display: block;
                        }

                        .play-nav {
                            position: absolute;
                            bottom: 5px;
                            left: 0px;
                            z-index: 1000000;
                            width: 100%;
                            text-align: center;
                            list-style: none;
                            padding: 0;
                            // background: red;
                        }

                        .play-nav > li {
                            display: inline-block;
                            text-indent: -9999px;
                            width: 36px;
                            height: 5px;
                            background-color: #9D9CA1;
                            margin: 0 3px;
                        }
                        `}</style>

            </div>


        )
    }

}

export default Swiper