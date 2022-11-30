import React from "react";

export const ColoredMessage = ({ color, children}) => {

    const contentStyle= {
        color,
        fontSize:"40px"
    }


    return (
        <>
            <p style={contentStyle}>{children}</p>
        </>
    )

};


