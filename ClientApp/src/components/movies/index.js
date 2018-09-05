import React, { Component } from 'react';
//import { reduxForm } from 'redux-form';
import MovieList from './MovieList';
import SearchMovie from './SearchMovie';

class Movies extends Component {
    state = { showMovieDetails: false };

    componentWillMount() {
        this.setState({ showMovieDetails: this.props.location.showMovieDetails });
    }

    renderContent() {
        if (this.state.showMovieDetails) {
            return (
                <div>
                    <SearchMovie onSearchSubmit={() => this.setState({ showMovieDetails: true })} />
                    <MovieList onCancel={() => this.setState({ showMovieDetails: false })} />
                </div>
            );
        }
        return (
            <div>
                <SearchMovie onSearchSubmit={() => this.setState({ showMovieDetails: true })} />
            </div>
        );
        
    }

    render() {
        return(
            <div>{this.renderContent()}</div>
        );
    }
}

export default Movies;
