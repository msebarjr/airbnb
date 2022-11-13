import "./reserve.css";

function Reserve() {
    return (
        <section>
            <div className="reserve">
                <h2>Reserve Your Stay</h2>                
                <div className="actions flex">
                    <button className="btn btn-primary">
                        <a
                            href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book Airbnb
                        </a>
                    </button>
                    <button className="btn btn-secondary">
                        <a
                            href="https://t.vrbo.io/QyjtnSNGwub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book vrbo
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Reserve;
