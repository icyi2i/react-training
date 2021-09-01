import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Welcome from "./components/Welcome";
import productData from "./data/products.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./main.scss";

const App = () => {
    const routes = [
        {
            path: "/",
            title: "Home",
        },
        {
            path: "/products",
            title: "Products",
        },
    ];
    return (
        <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
                <Link className="navbar-brand" to="/">
                    Productive
                </Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNav"
                    aria-controls="collapsibleNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {routes.map((route, index) => (
                            <li className="nav-item" key={index}>
                                <NavLink
                                    exact
                                    activeClassName="active"
                                    className="nav-link"
                                    to={route.path}
                                    title={route.title}
                                >
                                    {route.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            <main className="">
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route
                        exact
                        path="/products"
                        component={() => (
                            <ProductList productData={productData} />
                        )}
                    />
                    <Route
                        exact
                        path="/products/:product_id"
                        component={(product_id) => (
                            <Product
                                {...productData.filter(
                                    (p) => p.id === product_id
                                )[0]}
                            />
                        )}
                    />
                </Switch>
            </main>
        </Router>
    );
};

export default App;
