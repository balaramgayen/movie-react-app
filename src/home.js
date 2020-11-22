import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';

class Home extends Component {
    state = { 
        movies: []
     }

    onsearch(){
        let searchTerm = document.querySelector('#search').value;
        this.props.history.push('/search/' + searchTerm);
    }

    componentDidMount(){
        axios
        .get('https://api.themoviedb.org/3/movie/top_rated?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US&page=1')
        .then((response) => {
            this.setState({movies:response.data.results})
        })
        .catch(function(error){
            console.log(error);
        })
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="dispaly-1"><b>Welcome to Movie App</b></h1>
                        <p class="lead"><b>This is a place where you can find all of your favourite movies with details</b></p>
                        <input id="search" type="text" className="form-control text-area" placeholder="Search any movie"></input><br></br>
                        <button onClick={this.onsearch.bind(this)} className="btn btn-lg btn-dark">Search</button>
                    </div>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2><b>Top rated movies</b></h2>
                        </div>
                    </div>
                    <div className="row">
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
 
export default Home;