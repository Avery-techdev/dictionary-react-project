import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        <ul className="Synonyms">
        <h6>Synonyms: </h6>
      {props.synonyms.map(function(synonym, index) {
        return (
          <li key={index}>
            {synonym}
          </li>
        )
      })}
      </ul>
      </div>
      
    )
  } else {
    return null;
  }
  
}