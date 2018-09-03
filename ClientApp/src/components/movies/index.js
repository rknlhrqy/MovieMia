import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MovieDetails from './MovieDetails';
import SearchMovie from './SearchMovie';

class Movies extends Component {
    state = { showMovieDetails: false };

    renderContent() {
        if (this.state.showMovieDetails) {
            return (
                <div>
                    <MovieDetails onCancel={() => this.setState({ showMovieDetails: false })} />
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

export default reduxForm({
    form: 'searchForm',
    destroyOnUnmount: true
})(Movies);