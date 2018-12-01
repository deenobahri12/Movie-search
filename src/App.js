import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery';

class App extends Component {
constructor(props) {
  super(props) 
  this.state = {}


    this.performSearch("man")
  }

  performSearch(searchTerm){
    console.log("perform search using moviedb")
    const urlString ="https://api.themoviedb.org/3/search/movie?api_key=f0e0a9cf894a69b150b7b2aad60f6df1&language=en-US&page=1&include_adult=false&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (SearchResults) => {
        console.log("fetched data")
        //console.log(SearchResults)
        const results = SearchResults.results
        //console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src="https://image.tmdb.org/t/p/w185" + movie.poster_path;
         // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
       },
      error: (xhr, status, err) => {
        console.log('failed')
      }
    })
  }

serachChangeHandler(event) {
  console.log(event.target.value)
  const boundObject = this
  const searchTerm = event.target.value
  boundObject.performSearch(searchTerm)
}

  render() {
    return (
      <div className="titleBar">
        <table>
          <tr>
            <td>
              <img alt="app icon" width="70" src="tv-tag-logotype-symbol.svg"/>
            </td>
            <td width="8"/>
            <td>
             <h1> Movie Master</h1>
            </td>
          </tr>
        </table>

        <input style={{
        fontSize: 24,
        display: "block",
        width: "99%",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16
        }} onChange={this.serachChangeHandler.bind(this)} placeholder="Enter Movie"/>
     
        {this.state.rows}
     
      </div>
    );
  }
}

export default App;
