import "./facts.css";

import { cardData } from "../../api/cardData";
import Card from "../Card/Card";

function Facts() {
    return (
        <section>
            <div className="facts">
                <h2 id="amenities">Quick Facts</h2>
                <div className="facts__cards flex">
                    {cardData.map((data) => (
                        <Card key={data.id} details={data} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Facts;
