import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import SearchField from './SearchField';
import * as actions from '../../actions';

class SearchMovie extends Component {

    renderField() {
        return (
            <Field label="Search Movie: " type="text" name="movieTitle" component={SearchField}/>
        );
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit((values) =>
                    {
                        this.props.submitSearch(values);
                        this.props.onSearchSubmit();
                })}>
                    {this.renderField()}
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

SearchMovie = connect(null, actions)(SearchMovie);

export default reduxForm({
    form: 'searchForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: false
})(SearchMovie);

