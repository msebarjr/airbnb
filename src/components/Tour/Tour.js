import "./tour.css";

function Tour() {
    return (
        <div className="video">
            <iframe
                // width="1280"
                // height="702"
                // src="https://www.youtube.com/embed/6ZGv3zXMWBg"
                src="https://player.vimeo.com/video/764003141?h=53a9dcc539&badge=0&autopause=0&player_id=0&app_id=58479/embed"
                title="Tour of Home"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen={true}
            ></iframe>
        </div>
        // <div className="vimeo">
        //     <iframe
        //         src="https://player.vimeo.com/video/764003141?h=53a9dcc539&badge=0&autopause=0&player_id=0&app_id=58479/embed"
        //         allow="autoplay; fullscreen; picture-in-picture"
        //         allowfullscreen
        //         frameborder="0"
        //         title="Tour of home"
        //     ></iframe>
        // </div>
    );
}

export default Tour;
