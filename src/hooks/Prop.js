import React from 'react'


// To pass data from one component to other component
const Prop = (props) => {
    const{language,technology}=props //destructure
    return (
        <>
        <h2>It is a {props.language} class. It is used mainly for {props.technology}</h2>
        <h2>It is a {language} class. It is used mainly for {technology}</h2>

        </>
    )
}

export default Prop
