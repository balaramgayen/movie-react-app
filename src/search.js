import Axios from 'axios';
import React, { Component } from 'react';
import Card from './card';

class Search extends Component {
    state = { 
        movies: [],
        term:""
     }

    componentDidMount(){
        let searchTerm = this.props.match.params.term;
        Axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US&page=1&include_adult=false&query=' + searchTerm)
        .then((response) => {
            this.setState({movies:response.data.results,term:searchTerm})

        })
        .catch((error) => {
            console.log(error);
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container">
                    <di className="row mt-3">
                        <div className="col-12"><h1>search Results for <b>{this.state.term}</b></h1></div>
                    </di>
                    <div className="row mt-3">
                        {
                            this.state.movies.map((movie,index) => {
                                return <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Card id={movie.id} vote={movie.vote_average} date={movie.release_date} name={movie.title} overview={movie.overview} image={movie.poster_path}/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Search;