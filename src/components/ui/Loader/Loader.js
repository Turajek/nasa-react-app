import React from 'react';
import './Loader.scss';
function Loader() {
    return (
        <div className="loader">
            <div className="loader-in">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default Loader;