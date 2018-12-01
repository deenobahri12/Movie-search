import React from 'react';
import App from './App';
import "./App.css"

class MovieRow extends React.Component {
    viewMovie() {
        console.log('view movie')
        console.log(this.props.movie.title)
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url 
    }
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="140" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p className="overView">{this.props.movie.overview}</p>
              <input className="view" type="button" onClick={this.viewMovie.bind(this)} value="More Info" />
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow;