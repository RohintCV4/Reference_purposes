
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DemoAxios = () => {
    const[data,setData]= useState([]);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>  {setData(response.data); })
        
        .catch(error => {console.log(error);})
    },[]);
    useEffect(() => {
        console.log(data); // This will log the data whenever it changes
    }, [data]);
  return (
    <div>
       {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

       {data.map(item => (
        <div>
        <br></br>
        <p key={item.id}>{item.title}</p>
        {/* <li>{item.body }</li> */} 
        </div>
       
            
       )) }++
    </div>
  );    
}

export default DemoAxios