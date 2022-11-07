import Navigation from "../Navigation/Navigation";

import "./footer.css";

function Footer() {
    return (
        <>
            <Navigation />
            <footer>
                <div className="footer-wrapper">
                    <p>&copy; 2022 by Michael Sebar Jr</p>
                    <a
                        href="https://michaelsebarjr.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MichaelSebarJr.com
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;
