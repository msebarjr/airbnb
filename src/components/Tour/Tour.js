import "./tour.css";

function Tour() {
    return (
        <div className="video">
            <iframe
                src="https://www.youtube.com/embed/6ZGv3zXMWBg"
                title="Tour of Home"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen={true}
            ></iframe>
        </div>
    );
}

export default Tour;
