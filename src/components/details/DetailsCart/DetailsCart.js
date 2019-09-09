import React from 'react';
import { connect } from "react-redux"
import "./DetailsCart.scss";
function DetailsCart(props) {
    console.log(props)
    if (props.details.data) {
        return (
            <div className="detailsCart">
                <h1> {props.details.data[0].title}</h1>
                <div className="detailsCart-wrap">
                    <div className="detailsCart-photo">
                        <img src={props.details.links[0].href} alt="details" />
                    </div>
                    <p>{props.details.data[0].description_508}</p>
                </div>

            </div>
        )
    } else {
        return null;
    }

}
const mapStateToProps = store => {
    return {
        details: store.singleImage.image
    }
}

export default connect(mapStateToProps)(DetailsCart);