import Facts from "../components/Facts/Facts";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";

function Home() {
    return (
        <>
            <Navigation />
            <Hero />
            <main>
                <Facts />
                <Gallery />
            </main>
        </>
    );
}

export default Home;
