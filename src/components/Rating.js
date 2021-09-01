import React from "react";
import RatingStar from "./RatingStar";

const Rating = ({ rating = 5 }) => {
    return (
        <span>
            {[...Array(Math.floor(rating)).keys()].map((i, index) => (
                <RatingStar key={index} />
            ))}
            {rating % 1 > 0 ? (
                <RatingStar
                    key="partial-star"
                    width={Math.round((rating % 1) / 0.1)}
                />
            ) : null}
        </span>
    );
};

export default Rating;
