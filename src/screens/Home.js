import Contact from "../components/Contact/Contact";
import Facts from "../components/Facts/Facts";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Reserve from "../components/Reserve/Reserve";
import Tour from "../components/Tour/Tour";

function Home() {
    return (
        <>
            <div className="container">
                <Hero />
                <main>
                    <Facts />
                    <Gallery />
                </main>
            </div>
            <Tour />
            <Reserve />
            <div className="container">
                <Contact />
            </div>
        </>
    );
}

export default Home;
