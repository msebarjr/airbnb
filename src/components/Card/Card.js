import "./card.css";

function Card({ details }) {
    return (
        <div className="card flex">
            <div className="card__front"></div>
            <div className="card-title">
                <h3>{details.title}</h3>
            </div>
            <div className="card-info title text">
                {details.info.map((fact, idx) => (
                    <p key={idx}>{fact}</p>
                ))}
            </div>
        </div>
    );
}

export default Card;
