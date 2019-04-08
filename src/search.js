import React, { Component } from 'react';
import styled from 'styled-components';
import cors from 'cors';
import Axios from 'axios';

const { REACT_APP_BACKEND_URL } = process.env

class Search extends Component {
  state = {
    resource: "character",
    query: "wolverine",
    field_list: [],
    field_string: "name,deck,image",
    search_results: [],
  }

  handlechange(e){
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  handleResourceSelect(e){
    e.preventDefault();
    this.setState({resource: e.target.value});
  }

  handleFetch = (url) => {
    let URL = `https://comicvine.gamespot.com/api/search/?api_key=5aead445d58a27ad5910cad15ecaec148cc20127&format=json&sort=name:asc&resources=${this.state.resource}&query=${this.state.query}&field_list=name,deck,image`;
    fetch(`${REACT_APP_BACKEND_URL}/comics?${URL}`)
      .then(res => res.json())
      .then(data => this.setState({search_results: data.results}))
  }

  resultsHandler = () => {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <UlStyled >
          <li>SEARCH FOR COMICS</li>
          <li>Search By: <select
            defaultValue="character"
            onChange={e => this.handleResourceSelect(e)}
            >
            <option value="character">Character</option>
            <option value="issue">Issue</option>
            <option value="volume">Volume</option>
            <option value="person">Artist</option>
          </select></li>
          <li>Search For: <input type="text"
            cols="50"
            onChange={(e) => this.handlechange(e)}
            /></li>
        </UlStyled>
        <h3>WHEN YOU'VE SELECTED YOUR SEARCH PARAMETERS, CLICK THE LINK BELOW</h3>
        <URLDiv>
          <PStyled>
            <button
              onClick={this.handleFetch}
            >Search for Comics</button>
          </PStyled>
        </URLDiv>
        <div><h3>Results:</h3></div>
        {this.state.search_results.map( (obj) => 
          <ResultsDivS>
            <UlStyled>
              <li><img src={obj.image.icon_url} alt="icon"/></li>
              <li>Name: {obj.name}</li>
              <li>Description: {obj.deck}</li>
            </UlStyled>
          </ResultsDivS>
        )}
        </header>
      </div>
    );
  }
}

const ResultsDivS = styled.div`
  margin-right: 25px;
  align-items: left !important;
  justify-content: left !important;
`

const StyledLink = styled.a`
  color: white;
`

const URLDiv = styled.div`
  width: 75%;
`

const UlStyled = styled.ul`
  list-style: none;
`

const PStyled = styled.p`
  font-style: italic;
  margin-bottom: 5px;
  margin-top: 5px;
  line-height: 1;
`

export default Search;
