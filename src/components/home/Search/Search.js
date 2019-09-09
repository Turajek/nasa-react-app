import React from 'react';
import { connect } from 'react-redux';
import "./Search.scss";
import fetchNasaImages from '../../../store/nasa-images/actions';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchValue: "" };
    }
    handleChange = (event) => {
        this.setState({ searchValue: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(fetchNasaImages(this.state.searchValue));
    }


    render() {

        return (
            <div className="search">
                <div className="search-intro">
                    <h2> Welcome in Nasa App!</h2>
                    <p>Just type something to find awesome photos</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchValue} onChange={this.handleChange} />
                    <button> Search </button>
                </form>
            </div>
        );
    }
}

export default connect()(Search);
