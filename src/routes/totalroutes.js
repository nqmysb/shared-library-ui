import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Router, Switch } from 'react-router'
// import { Route, Router, Switch } from 'react-router-dom' //都可以两个 和react-router区别？

// import frontroutes from './frontroutes' 不需要了
import consoleroutes from './consoleroutes'
import FrontHome from '../components/front/FrontHome'
import Login from '../components/front/Login'
import Header from '../components/common/Header'
import NavBar from '../components/common/NavBar'
import Footer from '../components/common/Footer'
import FooterDark from '../components/common/FooterDark'

import ChannelList from '../components/front/ChannelList'
import Detail from '../components/front/Detail'



const TotalRoutes = () => (

    // <Router history={history} >
        <Route render={({ location }) =>
            <Switch location={location}>
                <Route path="/admin" render={() => consoleroutes} />
                <Route render={({ location }) => <div>
                    <Header />
                    <NavBar />
                    <Switch location={location}>
                        <Route exact path="/frontHome" component={FrontHome} />
                        <Route path="/login" component={Login} />
                        <Route path="/list/:channel" component={ChannelList} />
                        <Route path="/detail/:id" component={Detail} />
                    </Switch>
                    <Footer />
                    <FooterDark />
                </div>} />
            </Switch>
        } />
    // </Router>
)

// TotalRoutes.propTypes = {
//     history: PropTypes.object,
//     location: PropTypes.object,
// }
export default TotalRoutes