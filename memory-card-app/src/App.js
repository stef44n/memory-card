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

    //render cards on load and re-render on each click in randomised order
    // const [initialRenderArray, setInitialRenderArray] =
    //     React.useState(importedFlagsArray);
    const initialRenderArray = importedFlagsArray;

    const [resetState, setResetState] = React.useState(false);
    // const [firstRenderState, setFirstRenderState] = React.useState(true);

    const [cardElementsState, setCardElementsState] = React.useState(
        initialRenderArray.map((country) => (
            <Card
                imageSource={country.flag}
                key={country.id}
                handleClick={(x) => handleClick(x)}
                clicked={`${country.id} - array app`}
                // clicked={`${country.id} ${country.wasClicked} - array app`}
                reSet={false}
            />
        ))
    );

    // console.table(initialRenderArray);
    console.log(currentScore, highScore);

    const updateScores = (bool) => {
        // if (bool === false) {
        let cs = Number(document.getElementById("currSc").textContent);
        let hs = Number(document.getElementById("highSc").textContent);
        let diff = hs - cs;
        // let diff = squareOfDiff();
        console.log(diff);

        setCurrentScore((prevScore) => (bool === "false" ? prevScore + 1 : 0));
        // } else {
        //     setCurrentScore(0);
        // }

        if (
            // currentScore >= highScore &&
            bool === "false" &&
            diff === 0
        ) {
            updateHighScore();
        }
        // console.log(`UPDATE SCORES: [${bool}]`);
        //
        console.log(`%ccs dom: ${cs}`, "background: lightgreen");
        console.log(`%chs dom: ${hs}`, "background: lightgreen");
        //
        console.log(
            `%c U.S. Curr ${currentScore} - why stuck at zero??`,
            "background: lightgrey"
        );
        console.log(`U.S. High ${highScore}`);
        console.log(`CONSOLE LOG @ updateScores`);
    };
    // console.log(`U.S. Curr ${currentScore}`);
    // console.log(`U.S. High ${highScore}`);

    function updateHighScore() {
        setHighScore((prevScore) =>
            prevScore === initialRenderArray.length ? prevScore : prevScore + 1
        );
        // console.log(`updateHighScore ${currentScore} <-- also stuck`);
        console.log(`%cCONSOLE LOG @ updateHighScore`, "background: pink");
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
            // console.log("string");
            setResetState((prevState) => !prevState);
            setCardElementsState(
                initialRenderArray.map((country) => (
                    <Card
                        imageSource={country.flag}
                        key={country.id}
                        handleClick={(x) => handleClick(x)}
                        clicked={`${country.id} - array app`}
                        // clicked={`${country.id} ${country.wasClicked} - array app`}
                        reSet={false}
                    />
                ))
            );
        } else {
            // console.log("boolean");
            // setResetState((prevState) => !prevState);
            setCardElementsState(
                initialRenderArray.map((country) => (
                    <Card
                        imageSource={country.flag}
                        key={country.id}
                        handleClick={(x) => handleClick(x)}
                        clicked={`${country.id} - array app`}
                        // clicked={`${country.id} ${country.wasClicked} - array app`}
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
        console.log(`CONSOLE LOG @ handleClick`);
    }
    console.log(currentScore, highScore);

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
        console.log(`CONSOLE LOG @ randomiseArray`);

        return array;
    }

    function clickLoop() {
        setClickCount((prevState) => prevState + 1);
        console.log(`CONSOLE LOG @ clickLoop`);
    }

    React.useEffect(() => {
        // console.log("useEffect");
        // clickLoop();
        randomiseArrayOrder(initialRenderArray);
        // console.log(`eff ${currentScore}`);
        // console.log(`eff ${highScore}`);
        console.log(`CONSOLE LOG @ useEffect`);
        // let cs = Number(document.getElementById("currSc").textContent);
        // console.log(`cs dom: ${cs}`);
        // let hs = document.getElementById("highSc").textContent;
        // console.log(`hs dom: ${hs}`);

        // reRenderFlags();
        // setResetState(false);
        // console.log("useEffect end");
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
                    {/* {cardElements} */}
                    {resetState && cardElementsState}
                    {!resetState && cardElementsState}
                    {/* {firstRenderState && cardElementsState}
                    {!firstRenderState && cardElementsState} */}
                    {/* {renderState && reRenderFlags()} */}
                </div>
            </main>
            <Footer />
        </div>
    );
}
