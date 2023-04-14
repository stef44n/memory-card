import "../styles/Card.css";

export default function Card(props) {
    //set card state here
    return (
        <div className="card">
            {/*render card*/}
            <img className="card-image" src={props.imageSource} alt="card" />
        </div>
    );
}
