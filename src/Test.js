import React from 'react'
import Nav from './components/Nav'
import './test.css'


const Test = () => {
    return (
        <>
           <Nav/>
           <div className="container">
               <div className="content-item">
                   <img src="./images/1.jpg" alt="image" style={{height:'100%',width:'100%'}}/>
               </div>
               <div className="content-item">
                   <img src="./images/2.jpg" alt="image" style={{height:'100%',width:'100%'}}/>
               </div>
               </div> 
        </>
    )
}

export default Test
