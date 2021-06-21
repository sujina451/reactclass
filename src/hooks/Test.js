import React,{useState,useEffect} from 'react'
import NewTest from './NewTest'

const Test = () => {
    const[count,setCount]=useState(0)
    const[value,setValue]=useState(1)

    useEffect(()=>{
        alert('this is the effect page render')
    },[count])//alert displayed only once
    return (
        <>
           <h2>{count}</h2>
           <button onClick={()=>setCount(count+1)}>Click</button> 
           
           <h2>{value}</h2>
           <button onClick={()=>setValue(value+2)}>Click to increase value</button>
           <NewTest/>
        </>
       
    )
}

export default Test
