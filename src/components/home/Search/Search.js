import React from 'react';
import "./Search.scss";
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

export default Search
