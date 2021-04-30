import React from "react";
import { useParams } from "react-router-dom";
import Config from "../config";
import Principal from "../img/img.png";
import "../asset/Detail.css";
import useFetch from "../hooks/FetcHook";

//baseUrl lo puedo recibir en cualquier lado despues de importarlo y destructurarlo

const Detail = () => {
  const { id } = useParams();
  const { response } = useFetch(`${Config.baseUrl}/${id}`,{});
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="detail">
            <h3>{response.name}</h3>
          </div>
          <div className="design">
            <div className="principal">
              <img src={Principal} alt="Imagen" />
            </div>
            <div className="text">
              <p>{response.email}</p>
              <p>{response.website}</p>
              <p>response.address.city</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
