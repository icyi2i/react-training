import React from "react";
import Rating from "./Rating";

const Product = (props) => {
    return (
        <div>
            <h2 className="p-4">Product details: {props.name}</h2>
            <div className="card mx-4 my-2" key={props.id}>
                <div className="row m-0">
                    <div className="col col-sm-6 col-md-4 col-lg-3 p-3">
                        <img
                            className="card-img-left w-75 mx-auto d-block"
                            src={props.image}
                            alt=""
                        />
                    </div>
                    <div className="col col-sm-6 col-md-8 col-lg-9 border-start p-0">
                        <div className="border-bottom p-3 bg-light">
                            <p className="card-text d-flex ">
                                <span>{props.code}</span>
                                <strong className="ms-auto">
                                    Rs. {props.price}/-
                                </strong>
                            </p>
                        </div>
                        <div className="card-body py-4">
                            <p className="card-text d-flex">
                                <span>
                                    <h4 className="card-title">{props.name}</h4>
                                    Released:{" "}
                                    {new Date(
                                        props.releaseDate
                                    ).toLocaleDateString()}
                                </span>
                                <span className="ms-auto">
                                    <span className="d-block text-right">
                                        Rating: {props.rating}
                                    </span>
                                    <Rating rating={props.rating} />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
