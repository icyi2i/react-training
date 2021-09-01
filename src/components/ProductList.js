import React, { useRef, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Rating from "./Rating";

const ProductList = ({ productData }) => {
    const [productList, setProductList] = useState(productData);
    const [showImages, setShowImages] = useState(true);
    const filterRef = useRef(null);

    const applyFilter = (e) => {
        filterRef.current.value = e.target.value;
        setProductList(
            productData.filter(
                (p) => p.name.indexOf(filterRef.current.value) !== -1
            )
        );
    };
    return (
        <>
            <div className="d-flex p-4">
                <h2 className="h2">Product list</h2>
                <div className="ms-auto d-flex my-auto">
                    <div className="form-check form-switch px-3">
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Toggle images
                        </label>

                        <input
                            checked={showImages}
                            className="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            onChange={() => setShowImages(!showImages)}
                        />
                    </div>
                    <p className="pe-3 m-0 h5">
                        Filter <i className="fa fa-filter" />
                    </p>
                    <input
                        placeholder="Search by name"
                        type="text"
                        ref={filterRef}
                        onChange={applyFilter}
                    />
                </div>
            </div>
            {productList.length ? (
                <ul type="none" className="list-group">
                    {productList.map((product) => (
                        <div className="card mx-4 my-2" key={product.id}>
                            <div className="row m-0">
                                <div
                                    className={
                                        showImages
                                            ? "col col-sm-6 col-md-4 col-lg-3 p-3"
                                            : "d-none"
                                    }
                                >
                                    <img
                                        className="card-img-left w-75 mx-auto d-block"
                                        src={product.image}
                                        alt=""
                                    />
                                </div>
                                <div
                                    className={
                                        showImages
                                            ? "col col-sm-6 col-md-8 col-lg-9  border-start p-0"
                                            : "col p-0"
                                    }
                                >
                                    <div className="border-bottom p-3  bg-light">
                                        <p className="card-text d-flex ">
                                            <span>{product.code}</span>
                                            <strong className="ms-auto">
                                                Rs. {product.price}/-
                                            </strong>
                                        </p>
                                    </div>
                                    <div className="card-body py-4">
                                        <p className="card-text d-flex">
                                            <span>
                                                <Link
                                                    to={
                                                        "/products/" +
                                                        product.id
                                                    }
                                                >
                                                    <span className="card-title h4 d-block">
                                                        {product.name}
                                                    </span>
                                                </Link>
                                                Released:{" "}
                                                {new Date(
                                                    product.releaseDate
                                                ).toLocaleDateString()}
                                            </span>
                                            <span className="ms-auto">
                                                <span className="d-block text-right">
                                                    Rating: {product.rating}
                                                </span>
                                                <Rating
                                                    rating={product.rating}
                                                />
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <p className="px-4 lead text-center">
                    No products with name:{" "}
                    {filterRef.current === null
                        ? null
                        : filterRef.current.value}
                    !
                </p>
            )}
        </>
    );
};

export default ProductList;
