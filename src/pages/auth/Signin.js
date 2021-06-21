import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <>
          <Nav/>
          <div className="container">
                <div className="col-md-6 offset-md-3 p-3 mt-3 mb-3 shadow-lg">
                    <form>
                        <div className="col-12 mb-3">
                            <label htmlfor="email">Email </label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="col-12 mb-3">
                            <label htmlfor="password">Password </label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                        </div>
                     
                        <div className="mb-3">
                            <Link to="#">
                                <button className="btn btn-info text-white">Signin</button>
                            </Link> &nbsp;&nbsp;
                            Don't have Account Yet ?
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Signin
