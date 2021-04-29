import React from "react";
import "../asset/Users.css";
import Principal from "../img/img.png";
//import { Link } from "react-router-dom";

const Users = (props) => {
  //<Link to ={`/Users/${item.id}`}  key={item.id}>{item.name}</Link>
  return (
    <div>
      {props.value.map((item) => {
        return (
          <div className="cards" key={item.id}>
            <div className="card">
              <div className="detail">
                <h3 >
                 {item.name}
                </h3>
              </div>
              <div className="principal">                
                <img src={Principal} alt="Hola" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
