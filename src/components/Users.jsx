import React from "react";

const Users = (props) => {
  return <div>
    {
      props.value.map((item)=>{
        return (<li key={item.id}>{item.name}</li>)
      })
    }
  </div>;
};

export default Users;
