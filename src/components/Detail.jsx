import React from "react";
import { useParams } from "react-router-dom";
import Principal from "../img/img.png";
import "../asset/Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [user, setPeople] = React.useState([]);

  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const users = await data.json();
    setPeople(users);
  };
  return (
    <div>
      <div className="cards" key={id}>
        <div className="card">
          <div className="detail">
            <h3>{user.name}</h3>
          </div>
          <div className="design">
            <div className="principal">
              <img src={Principal} alt="Imagen" />
            </div>
            <div className="text">
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.website}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
