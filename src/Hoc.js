import React from 'react'
import { useState } from 'react'
const Hoc = (NewComponant,url) => {
    const Hocfun=()=>{
        const[data,setData]=useState('');
        const Fatchapi =()=>{
            fetch(url)
            .then((res)=>res.json())
            .then((val)=>console.log(val.users))
        }
        return <NewComponant  Fetchchapi={Fatchapi} ></NewComponant>
    };
  return Hocfun
};
export default Hoc;
