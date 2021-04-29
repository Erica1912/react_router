import React from "react";
import "../asset/Users.css";
import Principal from "../img/img.png";
import { Link } from "react-router-dom";

const Users = (props) => {
  return (
    <div>
      {props.value.map((item) => {
        return (
          <div className="cards">
            <div className="card">
              <div className="detail">
                <h3 key={item.id}>
                  <Link>{item.name}</Link>
                </h3>
              </div>
              <div className="principal">
                <img src={Principal} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
