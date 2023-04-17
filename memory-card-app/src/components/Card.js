import React from "react";
import "../styles/Card.css";

export default function Card(props) {
    //set card state here
    const [clickedState, setClickedState] = React.useState(false);

    function handleCardClick() {
        // setClickedState(true);
        setClickedState((prevState) => !prevState);
    }

    return (
        <div
            className="card"
            value={`${clickedState}`}
            onClick={props.handleClick}
        >
            {/*render card*/}
            <h1>
                {props.clicked} {`${props.clicked}`}
            </h1>
            <p>{`${clickedState}`}</p>
            <img
                className="card-image"
                src={props.imageSource}
                alt="card"
                // data-value={`${clickedState}`}
                onClick={handleCardClick}
                // defaultValue={props.clicked}
                // value={clicked}
                // defVal={clickedState}
                // onClick={props.handleClick}
                // value={props.value}
            />
        </div>
    );
}
