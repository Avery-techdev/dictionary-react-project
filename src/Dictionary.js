import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
  event.preventDefault();
  
  //documentation: https://dictionaryapi.dev/ 
  let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
  axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <section className="row justify-content-md-center">
        <form className="col-md-auto" onSubmit={search}>
          <input type="search" placeholder="search for any word" autoComplete="on" autoFocus={true} className="form-control shadow-sm" onChange={handleKeywordChange}/>
          <input type="submit" className="btn shadow-sm" value="search" />
        </form>
      </section> 
      <Results results={results} />
    </div>
  )
}