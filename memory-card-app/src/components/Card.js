import React from "react";
import "../styles/Card.css";

export default function Card(props) {
    //set card state here
    const [clickedState, setClickedState] = React.useState(false);

    // let resetAll = setClickedState(props.reSet);
    // let resetAll = props.reSet ? setClickedState(true) : false;
    // console.log(`%c PROPS.RESET: ${resetAll}`, "background: lightgrey");

    function handleCardClick(bool) {
        // setClickedState(true);
        bool = clickedState;
        let thisBool = bool;
        // setClickedState(false);
        // if (thisBool === "false") {
        //     setClickedState(true);
        //     console.log(`thisBool 1: ${bool}`);
        // } else {
        //     setClickedState(false);
        //     console.log(`thisBool 2: ${bool}`);
        // }
        console.log(`%c props.reSet: ${props.reSet}`, "background: orange");
        console.log(`%c bool: ${bool}`, "background: orange");
        console.log(`clickedState: ${clickedState}`);
        if (thisBool === true) {
            console.log(`thisBool 1: ${bool}`);
            // setClickedState(false);
        } else if (thisBool === false) {
            console.log(`thisBool 2: ${bool}`);
            setClickedState(true);
        } else if (thisBool === "true") {
            console.log(`thisBool 3: ${bool}`);
        } else if (thisBool === "false") {
            console.log(`thisBool 4: ${bool}`);
        }
    }

    return (
        <div
            // className="card"
            className={`card ${clickedState}`}
            value={`${clickedState}`}
            onClick={props.handleClick}
        >
            {/*render card*/}
            <h1>{`${clickedState}`}</h1>
            <p>
                {props.clicked}
                {/* {`${props.clicked}`} */}
            </p>
            <img
                className="card-image"
                src={props.imageSource}
                alt="card"
                // data-value={`${clickedState}`}
                onClick={() => handleCardClick(props.reSet)}
                // onClick={() => handleCardClick(false)}
            />
        </div>
    );
}
