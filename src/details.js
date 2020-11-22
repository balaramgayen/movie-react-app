import Axios from 'axios';
import React, { Component } from 'react';
import Card from './card';

class Details extends Component {
    state = { 
        details: {},
        recommend: []
     }

    rendergenre(){
        if(this.state.details.genres){
            return this.state.details.genres.map(function(genre){
            return <span>{genre.name} </span>
            })
        }
    }

    apiCall(movieId){
        Axios
        .get("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US")
        .then((response) => {
            let recommend = this.state.recommend;
            this.setState({details:response.data,recommend:recommend})
        })
        .catch(function(error){
            console.log(error);
        })

        Axios
        .get('https://api.themoviedb.org/3/movie/'+ movieId +'/recommendations?api_key=538cdd5be5fc6324661d3f3bfde7abf2&language=en-US&page=1')
        .then((response) => {
            let details = this.state.details;
            this.setState({details:details,recommend:response.data.results})
            window.scroll(0,0)
            console.log(this.state);
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.apiCall(this.props.match.params.id)
        }
    }

    componentDidMount(){
        let movieId = this.props.match.params.id;

        this.apiCall(movieId)

        
    }

    render() { 
        let releaseDate = new Date(this.state.details.release_date);
        releaseDate = releaseDate.getFullYear();

        return ( 
            <React.Fragment>
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-10">
                                <img src={"https://image.tmdb.org/t/p/w500/"+ this.state.details.poster_path} class="card-img-top" alt="..."/>
                            </div>
                            <div className="col-9">
                                <h1 class="display-4"><b>{this.state.details.title}({releaseDate})</b></ h1>
                                <h6>{this.rendergenre()}<b>*</b> {this.state.details.runtime}m</h6>
                                <h3><b>{this.state.details.vote_average}/10</b></h3>
                                <h6>{this.state.details.tagline}</h6>
                                <h3>Overview</h3>
                                <p class="lead">{this.state.details.overview}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Similar to <b>{this.state.details.title}</b></h1>
                        </div>
                        {
                            this.state.recommend.map((movie) => {
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
 
export default Details;