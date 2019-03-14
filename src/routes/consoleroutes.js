import React from 'react'
import { Route, Switch } from 'react-router'

import ConsoleHome from '../components/console/ConsoleHome'
import Login from '../components/console/Login'


const consoleroutes = (
  <div>
    <Switch>
      <Route exact path="/admin" component={ConsoleHome} />
      <Route  path="/admin/login" component={Login} />
    </Switch>
  </div>
)

export default consoleroutes