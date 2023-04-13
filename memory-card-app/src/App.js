// import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import React from "react";

export default function App() {
    //set current score
    const [currentScore, setCurrentScore] = React.useState(0);
    //set highest/best score
    const [highScore, setHighScore] = React.useState(0);
    //render cards on load and re-render on each click in randomised order

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
                    <Card />
                </div>
            </main>
        </div>
    );
}
