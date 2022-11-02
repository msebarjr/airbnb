import "./gallery.css";

function Gallery() {
    return (
        <section>
            <div className="gallery_container">
                <h2 className="heading top">Full Kitchen</h2>
                <div className="gallery">
                    <figure className="gallery__item--1">
                        <img
                            src="https://i.ibb.co/J59ZZvg/kitchen-appliances.jpg"
                            alt="Kitchen Appliances"
                            className="gallery__img"
                        />
                    </figure>
                    <figure className="gallery__item--2">
                        <img
                            src="https://i.ibb.co/hxNmgt9/kitchen-bar-2.jpg"
                            alt="Kitchen Bar Top"
                            className="gallery__img"
                        />
                    </figure>
                    <figure className="gallery__item--3">
                        <img
                            src="https://i.ibb.co/9WsHFHr/pool-seating.jpg"
                            alt="Pool Seating"
                            className="gallery__img"
                        />
                    </figure>
                    <figure className="gallery__item--4">
                        <img
                            src="https://i.ibb.co/BTPYwxw/pool-daytime.jpg"
                            alt="Pool"
                            className="gallery__img"
                        />
                    </figure>
                    <figure className="gallery__item--5">
                        <img
                            src="https://i.ibb.co/5k1bk6c/kitchen.jpg"
                            alt="Kitchen"
                            className="gallery__img"
                        />
                    </figure>
                </div>
                <h2 className="heading bottom">Private Pool</h2>
            </div>
        </section>
    );
}

export default Gallery;
