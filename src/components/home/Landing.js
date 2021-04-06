import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';
import Spinner from '../Layout/Spinner';


export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div class=" very padded text container segment">
        <SearchForm />
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);