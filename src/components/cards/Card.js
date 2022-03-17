import React from 'react';
// css
import "./Card.css";
// data import
import data from "../../helpers/Data";

const Card = () => {
  return (
    <div className="card-container">
      {data.map((data) => {
        return (
          <div className="cards" key={data.id}>
            <div className="title">
              <h2>{data.title}</h2>
            </div>
            <img className="image" src={data.image} alt={data.image} />
            <div className="desc">
              <p>{data.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Card;

