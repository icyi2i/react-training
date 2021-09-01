import React from "react";

const RatingStar = ({ width = 10 }) => {
    return (
        <i
            className="fa fa-lg fa-star rating-star px-0"
            style={{ maxWidth: (1 * width) / 10 + "em" }}
        />
    );
};

export default RatingStar;
