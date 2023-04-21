import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import React from "react";

// import array of country objects
import importedFlagsArray from "./images/flags";

export default function App() {
    //set current score
    const [currentScore, setCurrentScore] = React.useState(0);

    //set highest/best score
    const [highScore, setHighScore] = React.useState(0);

    const [clickCount, setClickCount] = React.useState(0);

    //render cards on load
    const initialRenderArray = importedFlagsArray;

    const [resetState, setResetState] = React.useState(false);

    const [cardElementsState, setCardElementsState] = React.useState(
        initialRenderArray.map((country) => (
            <Card
                imageSource={country.flag}
                key={country.id}
                handleClick={(x) => handleClick(x)}
                clicked={`${country.id} - array app`}
                reSet={false}
            />
        ))
    );

    // console.log(currentScore, highScore);

    const updateScores = (bool) => {
        // get values from DOM
        let cs = Number(document.getElementById("currSc").textContent);
        let hs = Number(document.getElementById("highSc").textContent);
        let diff = hs - cs;
        // let diff = squareOfDiff();
        // console.log(diff);
        // if card wasnt clicked then increment / else reset
        setCurrentScore((prevScore) => (bool === "false" ? prevScore + 1 : 0));

        // if card wasnt clicked AND current and high are equal then update
        if (
            // currentScore >= highScore &&
            bool === "false" &&
            diff === 0
        ) {
            updateHighScore();
        }
        // console.log(`%ccs dom: ${cs}`, "background: lightgreen");
        // console.log(`%chs dom: ${hs}`, "background: lightgreen");
        // console.log(
        //     `%c U.S. Curr ${currentScore} - why stuck at zero??`,
        //     "background: lightgrey"
        // );
        // console.log(`CONSOLE LOG @ updateScores`);
    };

    function updateHighScore() {
        setHighScore((prevScore) =>
            prevScore === initialRenderArray.length ? prevScore : prevScore + 1
        );
        // console.log(`updateHighScore ${currentScore} <-- also stuck`);
        // console.log(`%cCONSOLE LOG @ updateHighScore`, "background: pink");
    }

    function handleClick(event) {
        if (event === undefined) {
            console.log("event undefined");
            return;
        }
        const bool = event.currentTarget.getAttribute("value") || "false";
        updateScores(bool);
        clickLoop();
        if (bool === "true") {
            setResetState((prevState) => !prevState);
            setCardElementsState(
                initialRenderArray.map((country) => (
                    <Card
                        imageSource={country.flag}
                        key={country.id}
                        handleClick={(x) => handleClick(x)}
                        clicked={`${country.id} - array app`}
                        reSet={false}
                    />
                ))
            );
        } else {
            setCardElementsState(
                initialRenderArray.map((country) => (
                    <Card
                        imageSource={country.flag}
                        key={country.id}
                        handleClick={(x) => handleClick(x)}
                        clicked={`${country.id} - array app`}
                        reSet={true}
                    />
                ))
            );
        }

        // console.log(event.target);
        // console.log(event.currentTarget.getAttribute("value"));
        // console.log(bool);
        // console.log(event.target["data-value"]);
        // console.table(`%c** ${bool} **`, "background: lightgreen");
        // console.log(`CONSOLE LOG @ handleClick`);
    }
    // console.log(currentScore, highScore);

    function randomiseArrayOrder(array) {
        let currentIndex = array.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex = currentIndex - 1;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        // console.log(`CONSOLE LOG @ randomiseArray`);

        return array;
    }

    function clickLoop() {
        setClickCount((prevState) => prevState + 1);
        // console.log(`CONSOLE LOG @ clickLoop`);
    }

    React.useEffect(() => {
        // randomise order on each render
        randomiseArrayOrder(initialRenderArray);
        // console.log(`eff ${currentScore}`);
        // console.log(`eff ${highScore}`);
        // console.log(`CONSOLE LOG @ useEffect`);
    }, [currentScore, initialRenderArray, highScore, clickCount]);

    return (
        <div className="App">
            {console.log("%c--------render app-------", "background: yellow")}
            <Header />
            <main>
                <div className="scoreboard">
                    <p>
                        Current score : <span id="currSc">{currentScore}</span>
                    </p>
                    <p>
                        High score : <span id="highSc">{highScore}</span>
                    </p>
                </div>
                <div className="card-placement">
                    {resetState && cardElementsState}
                    {!resetState && cardElementsState}
                </div>
            </main>
            <Footer />
        </div>
    );
}
