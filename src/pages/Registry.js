import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Registry = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="text-center my-5">
                    <h2>Registry & Gifting</h2>
                    <p className="px-3">Whether you’re celebrating a wedding, a baby, a birthday, or other memorable milestone,
                        our registries and gift lists will help you and your guests find the perfect gifts.</p>
                </div>
                <div className="registry-section mb-5" style={{ backgroundColor: '#f3f1f1', padding: '6px 0' }}>
                    <h4 className="d-block text-center my-3">Find a registry or gift list</h4>
                    <div className="d-block">
                        <form className="form-inline d-flex justify-content-center mb-5" style={{ alignItems: 'flex-end' }}>
                            <div className="form-group">
                                <label htmlfor="staticEmail2" className="sr-only mb-2">Registrant Name</label>
                                <input type="text" className="form-control" placeholder="Search by Registrant Name" />
                            </div>
                            <div className="form-group mx-sm-3 mt-2">
                                <label htmlfor="staticEmail2" className="sr-only mb-2"></label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Wedding Registry</option>
                                    <option value="1">Baby Resigtry</option>
                                    <option value="2">Birthday Gift List</option>
                                    <option value="3">Custom Gift List</option>
                                </select>
                            </div>
                            <button type="button" className="btn btn-secondary btn-sm p-2" >Confirm identity</button>
                        </form>
                    </div>
                </div>
                <div className="row my-5 ">
                    <div className="col-md-6">
                        <img src="./images/r1.jpg" alt="" className="img-fluid"/>
                        <h4 className="text-center" style={{ backgroundColor: '#dedede', padding: '10px' }}>Wedding Registry</h4>
                    </div>
                    <div className="col-md-6">
                        <img src="./images/r2.jpg" alt="" className="img-fluid"/>
                        <h4 className="text-center" style={{ backgroundColor: '#dedede', padding: '10px' }}>Baby Registry</h4>

                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-6">
                        <img src="./images/r1.jpg" alt="" className="img-fluid"/>
                        <h4 className="text-center" style={{ backgroundColor: '#dedede', padding: '10px' }}>Birthday Gift List</h4>
                    </div>
                    <div className="col-md-6">
                        <img src="./images/r2.jpg" alt="" className="img-fluid"/>
                        <h4 className="text-center" style={{ backgroundColor: '#dedede', padding: '10px' }}>Custom Gift List</h4>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Registry
