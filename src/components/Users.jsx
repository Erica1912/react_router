import React, { useDebugValue } from "react";

const Pokemon = (props) => {
 
  console.log(props.value);

  return <div>
    {
      props.value.map((item)=>{
        return (<li key={item.id}>{item.name}</li>)
      })
    }
  </div>;
};

export default Pokemon;
