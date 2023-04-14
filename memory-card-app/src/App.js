// import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import React from "react";

// import flagArg from "./images/01.png";
import allImages from "./images/flags";

export default function App() {
    //set current score
    const [currentScore, setCurrentScore] = React.useState(0);
    //set highest/best score
    const [highScore, setHighScore] = React.useState(0);
    //render cards on load and re-render on each click in randomised order
    const [allFlags, setAllFlags] = React.useState(allImages);

    console.log(allImages);
    // console.log(allFlags);
    console.table(allFlags);
    // console.log(allImages[0].flag);

    return (
        <div className="App">
            <Header />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <main>
                <div className="scoreboard">
                    <p>Current score : {currentScore}</p>
                    <p>High score : {highScore}</p>
                </div>
                <div className="card-placement">
                    <Card imageSource={allImages[0].flag} />
                    <Card imageSource={allImages[1].flag} />
                    <Card imageSource={allImages[2].flag} />
                    <Card imageSource={allFlags[3].flag} />
                    {/* <Card imageSource={flagArg} /> */}
                    {/* <Card imageSource="https://images.dog.ceo/breeds/whippet/n02091134_14363.jpg" /> */}
                </div>
            </main>
        </div>
    );
}
