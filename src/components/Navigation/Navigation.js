import "./navigation.css";

function Navigation() {
    return (
        <header>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="btn btn-primary">
                        <a
                            href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book Airbnb
                        </a>
                    </li>
                    <li>
                        <a href="#hero">Home</a>
                    </li>
                    <li>
                        <a href="#amenities">Amenities</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                    <li className="btn btn-secondary">
                        <a
                            href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Book vrbo
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
