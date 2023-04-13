// import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";

export default function App() {
    //set current score
    //set highest/best score
    //render cards on load and re-render on each click in randomised order

    return (
        <div className="App">
            <Header />
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <main>
                <div className="card-placement">
                    <Card />
                </div>
            </main>
        </div>
    );
}
