import React, { Component } from 'react';
import MovieTile from './MovieTile';

export default class MovieList extends Component {
  constructor(props){
    super(props);
  }
  __renderTiles(){
    let renderBlocks = [];
    renderBlocks = this.props.movies.map((key, index) => {
      return (
        <MovieTile key={index} {...this.props} movies={this.props.movies} i={index}/>
      );
    })
    return renderBlocks;
  }
  render(){
    return(
      <div className="movie-listing">
        <p>Movie listing</p>
        <div className="movie-listing__blocks">
          {this.__renderTiles()}
        </div>
      </div>
    )
  }
}
