// import logo from "./logo.svg";
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

    const cardElements = initialRenderArray.map(
        (country) => (
            <Card
                imageSource={country.flag}
                key={country.id}
                // handleClick={handleClick}
                value={country.wasClicked}
                clicked={country.id}
            />
        )
        // console.log(country.flag)
    );

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
                    {/* <Card imageSource={flagArg} /> */}
                    {/* <Card imageSource="https://images.dog.ceo/breeds/whippet/n02091134_14363.jpg" /> */}
                    {cardElements}
                    {/* {renderFlags()} */}
                </div>
            </main>
        </div>
    );
}
