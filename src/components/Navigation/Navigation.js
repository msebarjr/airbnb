import "./navigation.css";

function Navigation({ isHeader }) {
    const nav = (
        <nav className="nav">
            <ul className="nav-list">
                <li className="btn btn-primary btn-nav">
                    <a
                        href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Book Airbnb
                    </a>
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
                <li className="btn btn-secondary btn-nav">
                    <a
                        href="https://t.vrbo.io/QyjtnSNGwub"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Book vrbo
                    </a>
                </li>
            </ul>
        </nav>
    );
    
    return isHeader ? <Header>{nav}</Header> : <Footer>{nav}</Footer>;
}

export default Navigation;

function Header({ children }) {
    return <header>{children}</header>;
}

function Footer({ children }) {
    return <>{children}</>;
}
