import React from 'react';
const NameList = (props) =>{
  return(
  <div>
      {props.data.map( (unitData) =>
      <div> 
        <h1>{unitData.name}</h1>
        <h2>{unitData.age}</h2>
      </div>
      )}
  </div>
  )
}
export default NameList;