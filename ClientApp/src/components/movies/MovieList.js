import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

const renderContent = (movie) => {
    if (isAvailable(movie) && movie.movie !== null) {
        if (movie.movie.length === 0) {
            return <h6>{'Cannot find.'}</h6>;
        }
        return (
            <ul>
            {movie.movie.map(each => {
                return (
                    <li key={each.id}>
                        <h5><Link to={"/movie/" + each.id}>{each.titleName}</Link></h5>
                    </li>
                );
            })}
            </ul>

        );
    }
    return <h6>{'Please Wait....'}</h6>;
};

const MovieList = (props) => {
    return (
        <div>         
            <h5>Movies Found: </h5>
            {renderContent(props.movie)}
        </div>
    );
};


const mapStateToProps = (state) => {
    return { movie: state.movie };
}


export default connect(mapStateToProps, actions)(MovieList);