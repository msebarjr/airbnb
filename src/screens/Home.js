import Facts from "../components/Facts/Facts";
import Gallery from "../components/Gallery/Gallery";
import Hero from "../components/Hero/Hero";

function Home() {
    return (
        <div className="container">
            <Hero />
            <main>
                <Facts />
                <Gallery />
            </main>
        </div>
    );
}

export default Home;
