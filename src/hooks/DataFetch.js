import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch = () => {
    const[posts,setPost]=useState([]) // empty cuz data is in array
    const[limit,setLimit]=useState(20)
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')// get used to fetch data from server
        .then((res)=>{ //Then shows response
            console.log(res.data)
            setPost(res.data)
        })
        .catch(error=>console.log(error)) //catch shows error
    }
    )
    return (
        <>
        {posts.slice(0,limit).map(item=>( //slice returns selected elements of array as new
            <li key={item.id}>{item.title}</li>
        ))}
        { limit < posts.length &&
         <button onClick={()=>setLimit(limit+20)}>Load More</button>
        }
        </>
    )
}

export default DataFetch
