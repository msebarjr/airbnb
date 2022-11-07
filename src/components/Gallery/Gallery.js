import { useState } from "react";
import FsLightbox from "fslightbox-react";

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
    const images = galleryData.map((image) => image.image);

    const [isSliderOpen, setIsSliderOpen] = useState({
        slide: 1,
        isOpen: false,
    });

    const openSliderHandler = (index) => {
        setIsSliderOpen((prevState) => ({
            ...prevState,
            slide: index,
            isOpen: !prevState.isOpen,
        }));
    };

    return (
        <>
            <section>
                <div className="gallery_container" id="gallery">
                    <h2 className="heading top">Full Kitchen</h2>
                    <div className="gallery">
                        <figure
                            className="gallery__item--1"
                            onClick={() => openSliderHandler(7)}
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
                            onClick={() => openSliderHandler(8)}
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
                            onClick={() => openSliderHandler(18)}
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
                            onClick={() => openSliderHandler(16)}
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
                            onClick={() => openSliderHandler(10)}
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
                        <figure
                            className="gallery__item--1a"
                            onClick={() => openSliderHandler(14)}
                        >
                            <img
                                src={Master}
                                alt="Master bedroom"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--2a"
                            onClick={() => openSliderHandler(2)}
                        >
                            <img
                                src={Bedroom_1}
                                alt="Spare bedroom"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--3a"
                            onClick={() => openSliderHandler(13)}
                        >
                            <img
                                src={Living_Room_2}
                                alt="Living room"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--4a"
                            onClick={() => openSliderHandler(12)}
                        >
                            <img
                                src={Living_Room_1}
                                alt="Living room"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                        <figure
                            className="gallery__item--5a"
                            onClick={() => openSliderHandler(3)}
                        >
                            <img
                                src={Spare_Room}
                                alt="Spare bedroom"
                                className="gallery__img"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                    <h2 className="heading bottom">Comfy Beds</h2>
                </div>
            </section>

            <FsLightbox
                toggler={isSliderOpen.isOpen}
                sources={images}
                slide={isSliderOpen.slide}
            />
        </>
    );
}

export default Gallery;
