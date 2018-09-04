import React, { Component }from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';


class MovieDetails extends Component {

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    isAvailable(obj) {
        if (obj && !this.isEmpty(obj)) {
            return true;
        }
        return false;
    }

    renderStorylines(storylines) {
        if (this.isAvailable(storylines)) {
            return (
                <ul>
                    {storylines.map(each => {
                        return (
                            <li key={each.type}>
                                <h5>{each.type} :</h5>
                                <p>{each.description}</p>
                            </li>
                        );
                    })}
                </ul>
            );
        }
        return 'none';
    }

    renderContent(movie) {
        const movieId = this.props.match.params.movie_id;
        if (this.isAvailable(movie) && movie.movie !== null) {
            const movieData = movie.movie.find(each => each.id === movieId)
            const { titleName, releaseYear, storylines } = movieData;
            return (
                <div>
                    <h3>{titleName}</h3>
                    <h4>Released in {releaseYear}.</h4>
                    <h4>Story:</h4>
                    {this.renderStorylines(storylines)}
                </div>
            );
        }
        return <h6>{'Not available'}</h6>;
    }


    render() {
        const newTo = {
            pathname: "/search",
            showMovieDetails: true
        };
        return (
            <div>
                <Link to={newTo} className="btn btn-default">Back</Link>
                {this.renderContent(this.props.movie)}
            </div>
        );
    }

};


const mapStateToProps = (state) => {
    return {movie: state.movie};
}

export default connect(mapStateToProps, actions)(MovieDetails);
