import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="card mt-3">
                    <img className="img img-rounded img-thumbnail" src={"https://image.tmdb.org/t/p/w500" + this.props.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h3 class="card-title"><b>{this.props.name}</b></h3>
                        <h5><b>IMDB rating ({this.props.vote}/10)</b></h5>
                        <h6>Release date: {this.props.date}</h6>
                        <Link to={"/details/" + this.props.id} class="btn btn-dark btn-block">View details</Link>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Card;