import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


const isEmpty = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};

const isAvailable = (obj) => {
    if (obj && !isEmpty(obj)) {
        return true;
    }
    return false;
};

const renderStorylines = (storylines) => {
    if (isAvailable(storylines)) {   
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
};

const renderContent = (movie) => {
    console.log(movie);
    if (isAvailable(movie) && movie.movie !== null) {
        const { titleName, releaseYear, storylines } = movie.movie;
        return (
            <div>
                <h3>{titleName}</h3>
                <h4>Released at {releaseYear}.</h4>
                <h4>Story:</h4>
                {renderStorylines(storylines)}
            </div>
        );
    }
    return <h6>{'Not available'}</h6>;
};

const MovieDetails = (props) => {
    return (
        <div>
            {renderContent(props.movie)}
            <button onClick={props.onCancel} >Back</button>
        </div>
    );

};


const mapStateToProps = (state) => {
    console.log('mapStateToProps:', state);
    return {movie: state.movie};
}

export default connect(mapStateToProps, actions)(MovieDetails);
