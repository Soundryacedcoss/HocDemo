import React from 'react'
import Hoc from './Hoc'
const Color = ({Fetchchapi}) => {
  return (
    <div>
        <button onClick={Fetchchapi}>Color</button>
    </div>
  )
}
export default Hoc(Color,'https://dummyjson.com/users/filter?key=age&value=30')