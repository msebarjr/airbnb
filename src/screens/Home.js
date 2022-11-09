import Contact from "../components/Contact/Contact";
import Facts from "../components/Facts/Facts";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Reserve from "../components/Reserve/Reserve";

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
            <Reserve />
            <div className="container">
                <Contact />
            </div>
        </>
    );
}

export default Home;
