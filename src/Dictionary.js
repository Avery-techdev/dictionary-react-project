import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
  event.preventDefault();
  
  //documentation: https://dictionaryapi.dev/ 
  const apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
  axios.get(apiUrl).then(handleDictionaryResponse);

  const pexelsApiKey = "563492ad6f9170000100000180e0401876874cf889cb774ae4f7721d";
  const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
  const headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
  axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value)
  }

  return (
    <div className="Dictionary">
      <section className="row justify-content-md-center">
        <form className="col-md-auto" onSubmit={search}>
          <input type="search" placeholder="search for any word" autoFocus="on" className="form-control shadow-sm" onChange={handleKeywordChange}/>
          <input type="submit" className="btn shadow-sm" value="search" />
        </form>
      </section> 
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  )
}