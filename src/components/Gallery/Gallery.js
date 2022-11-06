import { useState } from "react";


import "./gallery.css";
import { galleryData } from "../../api/galleryData";

import Bedroom_1 from "../../assets/bedroom_1_beds.jpg";
import Kitchen_Appliances from "../../assets/kitchen_appliances.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Bar from "../../assets/kitchen_bar_2.jpg";
import Seating from "../../assets/pool_seating.jpg";
import Pool from "../../assets/pool_daytime.jpg";
import Master from "../../assets/master_bedroom_2.jpg";
import Living_Room_2 from "../../assets/living_room_2.jpg";
import Living_Room_1 from "../../assets/living_room_1.jpg";
import Spare_Room from "../../assets/bedroom_2_beds.jpg";

function Gallery() {
    // const images = galleryData.map((image) => image.image);

    const images = [
        "../../assets/bedroom_1_alt.jpg",
        "../../assets/bedroom_1_beds.jpg",
        "../../assets/bedroom_2_beds.jpg",
        "../../assets/front_daytime.jpg",
        "../../assets/front_nighttime.jpg",
        "../../assets/guest_bathroom.jpg",
        "../../assets/kitchen_appliances.jpg",
        "../../assets/kitchen_bar_2.jpg",
        "../../assets/kitchen_bar.jpg",
        "../../assets/kitchen.jpg",
        "../../assets/laundry_room.jpg",
        "../../assets/living_room_1.jpg",
        "../../assets/living_room_2.jpg",
        "../../assets/master_bedroom.jpg",
        "../../assets/master_bathroom_2.jpg",
        "../../assets/pool_daytime.jpg",
        "../../assets/pool_nighttime.jpg",
        "../../assets/pool_seating.jpg",
    ];

    const imageComp = galleryData.map((image) => image.image);

    const [lightboxController, setLightboxController] = useState(false);

    const openLightboxOnSlide = () => {
        setLightboxController(!lightboxController);
    };

    return (
        <>
            <section>
                <div className="gallery_container">
                    <h2 className="heading top" id="gallery">
                        Full Kitchen
                    </h2>
                    <div className="gallery">
                        <figure
                            className="gallery__item--1"
                            onClick={openLightboxOnSlide}
                        >
                            <img
                                src={Kitchen_Appliances}
                                alt="Kitchen Appliances"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--2"
                            onClick={openLightboxOnSlide}
                        >
                            <img
                                src={Bar}
                                alt="Kitchen Bar Top"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--3 "
                            onClick={openLightboxOnSlide}
                        >
                            <img
                                src={Seating}
                                alt="Pool Seating"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--4"
                            onClick={openLightboxOnSlide}
                        >
                            <img
                                src={Pool}
                                alt="Pool"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--5"
                            onClick={openLightboxOnSlide}
                        >
                            <img
                                src={Kitchen}
                                alt="Kitchen"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                    <h2 className="heading bottom">Private Pool</h2>
                </div>
            </section>

            <section>
                <div className="gallery_container">
                    <h2 className="heading top">Spacious Rooms</h2>
                    <div className="gallery-bottom">
                        <figure className="gallery__item--1a">
                            <img
                                src={Master}
                                alt="Master bedroom"
                                className="gallery__img"
                                loading="lazy"
                                onClick={openLightboxOnSlide}
                            />
                        </figure>
                        <figure className="gallery__item--2a">
                            <img
                                src={Bedroom_1}
                                alt="Spare bedroom"
                                className="gallery__img"
                                loading="lazy"
                                onClick={openLightboxOnSlide}
                            />
                        </figure>
                        <figure className="gallery__item--3a">
                            <img
                                src={Living_Room_2}
                                alt="Living room"
                                className="gallery__img"
                                loading="lazy"
                                onClick={openLightboxOnSlide}
                            />
                        </figure>
                        <figure className="gallery__item--4a">
                            <img
                                src={Living_Room_1}
                                alt="Living room"
                                className="gallery__img"
                                loading="lazy"
                                onClick={openLightboxOnSlide}
                            />
                        </figure>
                        <figure className="gallery__item--5a">
                            <img
                                src={Spare_Room}
                                alt="Spare bedroom"
                                className="gallery__img"
                                loading="lazy"
                                onClick={openLightboxOnSlide}
                            />
                        </figure>
                    </div>
                    <h2 className="heading bottom">Comfy Beds</h2>
                </div>
            </section>
            
        </>
    );
}

export default Gallery;
