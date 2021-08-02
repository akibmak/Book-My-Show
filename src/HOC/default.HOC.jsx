import React from "react";
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (<>
        <Route 
        {...rest}
            component={(props) => ( 
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
            )
        } 
        />
    </>
    );
};

export default DefaultHOC;

// <></> It is called fragments which will act as imaginary parent element which will be removed in rendering process.

/* ... is called spread operator.The spread operator is a new addition to the set of operators in JavaScript ES6.
 It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly
 used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.*/