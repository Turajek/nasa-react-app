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
        const mappedImages = this.props.images.map((image, index) => {
            if (image.links) {
                return <img src={image.links[0].href} alt="nasa-result" key={index} />
            } else {
                return null;
            }
        })
        return (
            <div className="search">
                <div className="search-intro">
                    <h2> Welcome in Nasa App!</h2>
                    <p>Just type something to find awesome photos</p>
                    <div> {mappedImages}</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchValue} onChange={this.handleChange} />
                    <button> Search </button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = store => {
    return {
        images: store.nasaImages.images
    }
}
export default connect(mapStateToProps)(Search);
