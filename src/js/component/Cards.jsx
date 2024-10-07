import React from "react";
import Card from "./Card";

const Cards = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                    <Card />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                    <Card />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                    <Card />
                </div>
                <div className="col-12 col-md-6 col-lg-3 mb-4 d-flex justify-content-center">
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Cards;
