import React from 'react';
const NameList = (props) =>{
  return(
  <div>
      {props.data.map( unitData => <h1>{unitData.name}</h1>)}
  </div>
  )
}
export default NameList;