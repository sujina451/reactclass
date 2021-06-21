import React from 'react'
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom'
import Home from './pages/Home'
import Deals from './pages/Deals'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import CustomerService from './pages/CustomerService'
import Registry from './pages/Registry'
import Increment from './hooks/Increment'
import Test from './hooks/Test'

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/deals" component={Deals}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/customerservice" component={CustomerService}/>
                    <Route exact path="/registry" component={Registry}/>
                   
                    {/*  HOOKS */}
                    <Route exact path="/hooks/increment" component={Increment}/>
                    <Route exact path="/hooks/useEffect" component={Test}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
