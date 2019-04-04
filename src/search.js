import React, { Component } from 'react';
import styled from 'styled-components';

class Search extends Component {
  state = {
    resource: "character",
    query: "wolverine",
    field_list: [],
    field_string: ""
  }

  handlechange(e){
    e.preventDefault();
    this.setState({query: e.target.value});
  }

  handleResourceSelect(e){
    e.preventDefault();
    this.setState({resource: e.target.value});
  }

  handleFieldSelect(e){
    let fields  = [ ...this.state.field_list ];
    console.log(fields)
    if(e.target.checked) fields.push(`${e.target.value},`);
    if(!e.target.checked) fields.splice(fields.indexOf(e.target.value), 1);
    this.setState({field_list: fields});
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
          <li>Refine By: <form>
            <input type="checkbox" value="name" onChange={e => this.handleFieldSelect(e)} checked={null}/>Name<br />
            <input type="checkbox" value="description" onChange={e => this.handleFieldSelect(e)} checked={null}/>Long Description<br />
            <input type="checkbox" value="deck" onChange={e => this.handleFieldSelect(e)} checked={null}/>Short Description (Deck)<br />
          </form></li>
        </UlStyled>
        <h3>WHEN YOU'VE SELECTED YOUR SEARCH PARAMETERS, CLICK THE LINK BELOW</h3>
        <URLDiv>
          <PStyled>
            <StyledLink target="_blank"
              href={
              `https://comicvine.gamespot.com/api/search/?api_key=5aead445d58a27ad5910cad15ecaec148cc20127&format=json&sort=name:asc&resources=${this.state.resource}&query=${this.state.query}&field_list=${this.state.field_list.join("")}`}
            >Search for Comics</StyledLink>
            <br />
            (opens in new tab)
          </PStyled>
        </URLDiv>
        <br/>
        <br/>
        <br/>
        </header>
      </div>
    );
  }
}

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
