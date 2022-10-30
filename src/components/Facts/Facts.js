import "./facts.css";

import { cardData } from "../../api/data";
import Card from "../Card/Card";

function Facts() {
    return (
        <section>
            <div className="facts" id="amenities">
                <h2>Quick Facts</h2>
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
