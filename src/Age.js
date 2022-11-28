import React from 'react'
import  Hoc  from './Hoc'
const Age = ({Fetchchapi}) => {
  return (
    <div>
        <button onClick={Fetchchapi}>Age</button>
    
    </div>
  )
}
export default Hoc(Age,'https://dummyjson.com/users/filter?key=age&value=30')
