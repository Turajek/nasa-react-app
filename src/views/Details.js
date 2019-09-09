import React from 'react'
import DetailsCart from '../components/details/DetailsCart/DetailsCart';
import { connect } from 'react-redux';
import fetchSingleImage from '../store/single-image/actions';


class Details extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleImage(this.props.match.params.id));
    }
    render() {
        return (
            <div>
                <DetailsCart />
            </div>
        );
    }
}

export default connect()(Details);