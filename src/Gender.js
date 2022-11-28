import React from 'react'
import Hoc from './Hoc'
const Gender = ({Fetchchapi}) => {
  return (
    <div>
        <button onClick={Fetchchapi}>Gender</button>
    </div>
  )
}
export default Hoc(Gender,'https://dummyjson.com/users/filter?key=gender&value=male')