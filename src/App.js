import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { hot } from 'react-hot-loader'
import TotalRoutes from './routes/totalroutes'



const App = ({ history }) => {
    
    return (
        //这个history是必须的 
        <ConnectedRouter history={history}> 
            <TotalRoutes />
        </ConnectedRouter>
    )
}

App.propTypes = {
    history: PropTypes.object,
}


export default hot(module)(App)
// export default App



