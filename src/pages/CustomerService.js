import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './customerservice.css'
import { Link } from 'react-router-dom'

const CustomerService = () => {
    return (
        <>
            <Nav />
            <div className="container">
                <div className="py-3 mt-3">
                    <h3>Hello. What can we help you with?</h3>
                </div>
            </div>
            <div className="shadow-sm p-2 mb-2 bg-white rounded"></div>
            <div className="container">
                <div className="p-3 mt-3 mb-3">
                    <h4>Some things you can do here</h4>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className="service-content">
                            
                                <img src="./images/s1.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Your Orders</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}>Track Orders</span>
                                <span className="d-block" style={{ fontSize: '14px' }}>Edit or cancel orders</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s2.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Returns & Refunds</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}> Return or exchange items</span>
                                <span className="d-block" style={{ fontSize: '14px' }}> Print return mailing labels</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s3.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Get Product Help</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}>Troubleshoot product setup and usage issues</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s4.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5> Digital Services and Device Support</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}> Troubleshoot device issues  </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s6.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Manage Prime</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}>Learn about Prime benefits</span>
                                <span className="d-block" style={{ fontSize: '14px' }}>Cancel Prime membership</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s7.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Payment & Gift Cards</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}> Add or edit payment methods  </span>
                                <span className="d-block" style={{ fontSize: '14px' }}>View, reload gift card balance </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s8.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5> Your Account</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}>Manage your account preferences    </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-content">
                                <img src="./images/s9.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Amazon and Covid-19</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}>FAQs about the impact on ordering </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className=" service-content">
                                <img src="./images/s10.png" className="img-service" alt="no image" />
                            <div className="mx-2 my-1 ">
                                <h5>Safe Online Shopping</h5>
                                <span className="d-block" style={{ fontSize: '14px' }}> Learn how to protect your account  </span>
                                <span className="d-block" style={{ fontSize: '14px' }}>Report something suspicious  </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" style={{ borderTop: '1px solid #9e9e9e' }}></hr>
                <div className="search-section">
                <div className="py-3">
                    <h5>Search the help library <span className="mx-2" style={{ fontStyle: 'italic', fontSize: '18px', }}>Type something like, "question about a charge"</span></h5>
                </div>
                <div className="service-search">
                    <i class='bx bx-search'></i>
                    <input className="form-control me-2" type="search" placeholder="" aria-label="Search" />
                </div>
                </div>
                
            </div>
            <hr className="my-4" style={{ borderTop: '1px solid #9e9e9e' }}></hr>
            <div className="browse-section">
                <div className="container">
                <div className="mb-3">
                    <h4>Browse Help Topics</h4>
                </div>
                    <div class="browse-1 d-flex align-items-start">
                        <div class="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
                            <Link class="nav-link active" to="#" data-bs-toggle="pill" data-bs-target="#v-pills-1"   >Recommended Topics</Link>
                            <Link class="nav-link" to="#" data-bs-toggle="pill" data-bs-target="#v-pills-2"  >Where's my stuff?</Link>
                            <Link class="nav-link" to="#" data-bs-toggle="pill" data-bs-target="#v-pills-3"   >Managing Your Orders</Link>
                            <Link class="nav-link" to="#" data-bs-toggle="pill" data-bs-target="#v-pills-4"   >Account Settings & Payment Methods</Link>
                        </div>
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" id="v-pills-1" role="tabpanel">
                                <ul>
                                    <h5>Learn how to...</h5>
                                    <li className="list-unstyled"> Where's My Stuff?</li>
                                    <li className="list-unstyled"> Cancel Items or Orders</li>
                                    <li className="list-unstyled">Returns & Refunds</li>
                                    <li className="list-unstyled">Shipping Rates & Information</li>
                                    <li className="list-unstyled">Change Your Payment Method</li>
                                    <li className="list-unstyled">Manage Your Account Information</li>
                                    <li className="list-unstyled">About Two-Step Verification</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="v-pills-2" role="tabpanel" >
                                <ul>
                                    <h5>Where's My Stuff?</h5>
                                    <li className="list-unstyled"> Where's My Stuff?</li>
                                    <li className="list-unstyled"> Cancel Items or Orders</li>
                                    <li className="list-unstyled">Returns & Refunds</li>
                                    <li className="list-unstyled">Shipping Rates & Information</li>
                                    <li className="list-unstyled">Change Your Payment Method</li>
                                    <li className="list-unstyled">Manage Your Account Information</li>
                                    <li className="list-unstyled">About Two-Step Verification</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="v-pills-3" role="tabpanel" >
                                <ul>
                                    <h5>Managing Your Orders</h5>
                                    <li className="list-unstyled"> Where's My Stuff?</li>
                                    <li className="list-unstyled"> Cancel Items or Orders</li>
                                    <li className="list-unstyled">Returns & Refunds</li>
                                    <li className="list-unstyled">Shipping Rates & Information</li>
                                    <li className="list-unstyled">Change Your Payment Method</li>
                                    <li className="list-unstyled">Manage Your Account Information</li>
                                    <li className="list-unstyled">About Two-Step Verification</li>
                                </ul>
                            </div>
                            <div class="tab-pane fade" id="v-pills-4" role="tabpanel">
                                <ul>
                                    <h5>Account Settings & Payment Methods</h5>
                                    <li className="list-unstyled"> Where's My Stuff?</li>
                                    <li className="list-unstyled"> Cancel Items or Orders</li>
                                    <li className="list-unstyled">Returns & Refunds</li>
                                    <li className="list-unstyled">Shipping Rates & Information</li>
                                    <li className="list-unstyled">Change Your Payment Method</li>
                                    <li className="list-unstyled">Manage Your Account Information</li>
                                    <li className="list-unstyled">About Two-Step Verification</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer />

        </>
    )
}

export default CustomerService
