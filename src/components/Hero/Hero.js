import "./hero.css";

function Hero() {
    return (
        <section>
            <div className="hero" id="hero">
                <div className="hero__photo"></div>
                <div className="hero__content">
                    <h1 className="heading">
                        Feel at home
                        <br />
                        Away from home
                    </h1>
                    <p>
                        Enjoy this thoroughly updated home with a large in
                        ground pool for family or friend gatherings looking for
                        the perfect getaway to south Florida! You'll have
                        everything you need for a pleasant and comfortable stay.
                    </p>
                    <div className="hero__actions flex">
                        <h3 className="heading">Book Now!</h3>
                        <div className="hero__actions-btns flex">
                            <div className="btn btn-primary">
                                <a
                                    href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Book Airbnb
                                </a>
                            </div>
                            <div className="btn btn-secondary">
                                <a
                                    href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Book vrbo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
