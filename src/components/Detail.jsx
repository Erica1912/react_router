import React from "react";
import { useParams } from "react-router-dom";
import Principal from "../img/img.png";
import "../asset/Detail.css";
import useFetch from "../hooks/FetcHook";

const Detail = () => {
  const { id } = useParams();
  const { url } = useFetch([]);

  return (
    <div>
      <div className="cards" key={id}>
        <div className="card">
          <div className="detail">
            <h3>{url}</h3>
          </div>
          <div className="design">
            <div className="principal">
              <img src={Principal} alt="Imagen" />
            </div>
            <div className="text">
              <p>hola</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
