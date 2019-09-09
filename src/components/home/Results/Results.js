import React from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import "./Results.scss";
function Results(props) {
    const mappedResults = props.results.map((image, index) => {
        if (image.links) {
            return <Link to={'/' + image.data[0].nasa_id} key={index}><div className="results-item" style={{ backgroundImage: "url(" + image.links[0].href + ")" }}  ></div></Link>
        } else {
            return null
        }
    })
    const emptyResults = <div className="results-empty"> Unfortunately, we didn't find anything interesting for you :(</div>

    return (
        <div className="results">
            <h1> Results</h1>
            <div className="results-wrap">
                {mappedResults}
            </div>
            {props.results.length === 0 && emptyResults}
        </div>
    )
}
const mapStateToProps = store => {
    return {
        results: store.nasaImages.images
    }
}

export default connect(mapStateToProps)(Results);