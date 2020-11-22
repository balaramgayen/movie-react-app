import Axios from 'axios';
import React, { Component } from 'react';
import Card from './card';

class Popular extends Component {
    state = { 
        movies:[]
     }

    componentDidMount(){
        Axios
        .get('https://api.themoviedb.org/3/movie/popular?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US')
        .then((response) => {
            this.setState({movies:response.data.results})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1 className="text-center mt-3"><b>-: Popular Movies :-</b></h1>
                <div className="container">
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
 
export default Popular;