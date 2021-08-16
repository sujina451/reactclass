import React from 'react'
import {BrowserRouter as Router,Switch , Route} from 'react-router-dom' // handles dynamic url
import Home from './pages/Home'
import Deals from './pages/Deals'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import CustomerService from './pages/CustomerService'
import Registry from './pages/Registry'
import Increment from './hooks/Increment'
import Test from './hooks/Test'
import DataFetch from './hooks/DataFetch'
import Main from './hooks/Main'
import Show from './context/Show'
import FormValidation from './validation/FormValidation'
import Confirm from './pages/auth/Confirm'
import AdminDashboard from './pages/auth/AdminDashboard'
import AdminRoute from './pages/auth/AdminRoute'

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
                    <Route exact path="/email/confirmation/:token" component={Confirm}/>


                     {/*  Admin */}
                   <AdminRoute exact path="/admindashboard" component={AdminDashboard}/>
                    
                    
                    {/*  HOOKS */}
                    <Route exact path="/hooks/increment" component={Increment}/>
                    <Route exact path="/hooks/useEffect" component={Test}/>
                    <Route exact path="/api/data" component={DataFetch}/>
                    <Route exact path="/hooks/main" component={Main}/>
                     {/*Context API*/}
                    <Route exact path="/context/show" component={Show}/>
                    <Route exact path="/form/register" component={FormValidation}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
