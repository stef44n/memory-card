import "./styles/App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import React from "react";

// import array of country objects
import importedFlagsArray from "./images/flags";

export default function App() {
    //set current score
    const [currentScore, setCurrentScore] = React.useState(0);

    //set highest/best score
    const [highScore, setHighScore] = React.useState(0);

    //render cards on load and re-render on each click in randomised order
    const [initialRenderArray, setInitialRenderArray] =
        React.useState(importedFlagsArray);

    console.table(initialRenderArray);

    const cardElements = initialRenderArray.map((country) => (
        <Card
            imageSource={country.flag}
            key={country.id}
            handleClick={handleClick}
            clicked={`${country.wasClicked}`}
            // value={`${country.wasClicked}`}
            // defaultValue={props.defVal}
        />
    ));

    function updateScores(bool) {
        // if (bool === false) {
        setCurrentScore((prevScore) => (bool === "false" ? prevScore + 1 : 0));
        // } else {
        //     setCurrentScore(0);
        // }

        if (currentScore >= highScore && bool === "false") {
            updateHighScore();
        }
    }

    function updateHighScore() {
        setHighScore((prevScore) => prevScore + 1);
    }

    function handleClick(event) {
        const bool = event.currentTarget.getAttribute("value");
        updateScores(bool);
        // renderFlags();

        console.log(event.target);
        // console.log(event.currentTarget.getAttribute("value"));
        // console.log(bool);
        // console.log(event.target["data-value"]);
        console.table(`%c** ${bool} **`, "background: lightgreen");
    }
    console.log(currentScore, highScore);

    return (
        <div className="App">
            {console.log("%c--------render app-------", "background: yellow")}
            <Header />
            <main>
                <div className="scoreboard">
                    <p>Current score : {currentScore}</p>
                    <p>High score : {highScore}</p>
                </div>
                <div className="card-placement">
                    {cardElements}
                    {/* {renderFlags()} */}
                </div>
            </main>
        </div>
    );
}
