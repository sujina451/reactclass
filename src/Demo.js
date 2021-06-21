import React from 'react'
import Nav from './components/Nav'

const Demo = () => {
    return (
        <div>
            <Nav/>
            <h1 style={{color:'red',fontSize:'60px',backgroundColor:'aqua'}}>This is inline css</h1>
            <p style={{color:'grey',fontWeight:'bold',textAlign:'center'}}> This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.
        <br/><hr/>
      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the </p>
        </div>
    )
}

export default Demo
