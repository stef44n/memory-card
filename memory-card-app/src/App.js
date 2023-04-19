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

    const [clickCount, setClickCount] = React.useState(0);

    //render cards on load and re-render on each click in randomised order
    const [initialRenderArray, setInitialRenderArray] =
        React.useState(importedFlagsArray);

    const [resetState, setResetState] = React.useState(false);
    // const [firstRenderState, setFirstRenderState] = React.useState(true);
    // let resetState = false;
    // let renderState = true;

    const [cardElementsState, setCardElementsState] = React.useState(
        initialRenderArray.map((country) => (
            <Card
                imageSource={country.flag}
                key={country.id}
                handleClick={handleClick}
                clicked={`${country.id} - array app`}
                // clicked={`${country.id} ${country.wasClicked} - array app`}
                reSet={false}
            />
        ))
    );

    // console.table(initialRenderArray);

    function reRenderFlags(bool) {
        // if false keep
        // if (bool === "false") {
        resetState = bool || "undef";
        console.log(`rerend bool: ${resetState}`);

        setCardElementsState(
            initialRenderArray.map((country) => (
                <Card
                    imageSource={country.flag}
                    key={country.id}
                    handleClick={handleClick}
                    clicked={`${country.id} - array app`}
                    // clicked={`${country.id} ${country.wasClicked} - array app`}
                    reSet={
                        resetState === true
                        // "true" ? true : false
                        // trueOrFalse(resetState)
                        // false
                    }
                    // value={`${country.wasClicked}`}
                    // defaultValue={props.defVal}
                />
            ))
        );

        // if (
        //     resetState === "true"
        //     // resetState === "false" ||
        //     // resetState === "undef"
        // ) {
        //     // -----------------------
        //     console.log(`resetState rrf 3: ${bool}`);
        //     // const cardElements =
        //     setCardElementsState(
        //         initialRenderArray.map((country) => (
        //             <Card
        //                 imageSource={country.flag}
        //                 key={country.id}
        //                 handleClick={handleClick}
        //                 clicked={`${country.id} - array app`}
        //                 // clicked={`${country.id} ${country.wasClicked} - array app`}
        //                 reSet={true}
        //                 // value={`${country.wasClicked}`}
        //                 // defaultValue={props.defVal}
        //             />
        //         ))
        //     );

        //     //
        //     // return cardElements;
        // } else if (resetState === "false" || resetState === "undef") {
        //     console.log(`resetState rrf 4 || 6: ${bool}`);
        //     // const cardElements =
        //     setCardElementsState(
        //         initialRenderArray.map((country) => (
        //             <Card
        //                 imageSource={country.flag}
        //                 key={country.id}
        //                 handleClick={handleClick}
        //                 clicked={`${country.id} - array app`}
        //                 // clicked={`${country.id} ${country.wasClicked} - array app`}
        //                 reSet={
        //                     // resetState === "true" ||
        //                     // // resetState === "undef" ||
        //                     // resetState === true
        //                     //     ? true
        //                     //     : false
        //                     // trueOrFalse(resetState)
        //                     false
        //                 }
        //                 // value={`${country.wasClicked}`}
        //                 // defaultValue={props.defVal}
        //             />
        //         ))
        //     );

        //     // return cardElements;
        // }
    }

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
        clickLoop();
        if (bool === "true") {
            console.log("string");
            setResetState((prevState) => !prevState);
            setCardElementsState(
                initialRenderArray.map((country) => (
                    <Card
                        imageSource={country.flag}
                        key={country.id}
                        handleClick={handleClick}
                        clicked={`${country.id} - array app`}
                        // clicked={`${country.id} ${country.wasClicked} - array app`}
                        reSet={false}
                    />
                ))
            );
        } else {
            console.log("boolean");
            // setResetState((prevState) => !prevState);
            setCardElementsState(
                initialRenderArray.map((country) => (
                    <Card
                        imageSource={country.flag}
                        key={country.id}
                        handleClick={handleClick}
                        clicked={`${country.id} - array app`}
                        // clicked={`${country.id} ${country.wasClicked} - array app`}
                        reSet={true}
                    />
                ))
            );
        }
        // setFirstRenderState(false);
        // resetState = bool;
        // console.log(`resetState in HandleClick: ${resetState}`);
        // if (resetState === "false") {
        //     console.log(`string false`);
        // } else if (resetState === "true") {
        //     console.log(`string true`);
        // }
        // console.log(resetState);
        // if (bool === "true") {
        //     setResetState(true);
        //     console.log(`resetState: ${resetState}`);
        //     reRenderFlags();
        //     // setResetState(false);
        //     console.log(`resetState: ${resetState}`);
        // } else {
        //     reRenderFlags();
        // }
        // console.log(resetState);
        // renderFlags();
        // randomiseArrayOrder(initialRenderArray);

        console.log(event.target);
        // console.log(event.currentTarget.getAttribute("value"));
        // console.log(bool);
        // console.log(event.target["data-value"]);
        console.table(`%c** ${bool} **`, "background: lightgreen");
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

        return array;
    }

    function clickLoop() {
        setClickCount((prevState) => prevState + 1);
    }

    React.useEffect(() => {
        console.log("useEffect");
        // clickLoop();
        randomiseArrayOrder(initialRenderArray);
        // reRenderFlags();
        // setResetState(false);
        // console.log("useEffect end");
    }, [currentScore, initialRenderArray, clickCount]);

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
                    {/* {cardElements} */}
                    {resetState && cardElementsState}
                    {!resetState && cardElementsState}
                    {/* {firstRenderState && cardElementsState}
                    {!firstRenderState && cardElementsState} */}
                    {/* {renderState && reRenderFlags()} */}
                </div>
            </main>
        </div>
    );
}
