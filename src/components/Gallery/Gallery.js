import { useState } from "react";
import FsLightbox from "fslightbox-react";

import "./gallery.css";

import { galleryData } from "../../api/galleryData";

import Bedroom_1 from "../../assets/bedroom_1_beds.jpg";
import Bedroom_1_Blur from "../../assets/bedroom_1_beds_blur.jpg";
import Kitchen_Appliances from "../../assets/kitchen_appliances.jpg";
import Kitchen_Appliances_Blur from "../../assets/kitchen_appliances_blur.jpg";
import Kitchen from "../../assets/kitchen.jpg";
import Kitchen_Blur from "../../assets/kitchen_blur.jpg";
import Bar from "../../assets/kitchen_bar_2.jpg";
import Bar_Blur from "../../assets/kitchen_bar_2_blur.jpg";
import Seating from "../../assets/pool_seating.jpg";
import Seating_Blur from "../../assets/pool_seating_blur.jpg";
import Pool from "../../assets/pool_daytime.jpg";
import Pool_Blur from "../../assets/pool_daytime_blur.jpg";
import Master from "../../assets/master_bedroom_2.jpg";
import Master_Blur from "../../assets/master_bedroom_2_blur.jpg";
import Living_Room_2 from "../../assets/living_room_2.jpg";
import Living_Room_2_Blur from "../../assets/living_room_2_blur.jpg";
import Living_Room_1 from "../../assets/living_room_1.jpg";
import Living_Room_1_Blur from "../../assets/living_room_1_blur.jpg";
import Spare_Room from "../../assets/bedroom_2_beds.jpg";
import Spare_Room_Blur from "../../assets/bedroom_2_beds_blur.jpg";
import BlurredUpImage from "../BlurredImage";

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
                            {/* <img
                                src={Kitchen_Appliances}
                                alt="Kitchen Appliances"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Kitchen_Appliances_Blur}
                                large={Kitchen_Appliances}
                                alt="Kitchen Appliances"
                            />
                        </figure>
                        <figure
                            className="gallery__item--2"
                            onClick={() => openSliderHandler(8)}
                        >
                            {/* <img
                                src={Bar}
                                alt="Kitchen Bar Top"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Bar_Blur}
                                large={Bar}
                                alt="Kitchen Bar Top"
                            />
                        </figure>
                        <figure
                            className="gallery__item--3 "
                            onClick={() => openSliderHandler(18)}
                        >
                            {/* <img
                                src={Seating}
                                alt="Pool Seating"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Seating_Blur}
                                large={Seating}
                                alt="Pool Seating"
                            />
                        </figure>
                        <figure
                            className="gallery__item--4"
                            onClick={() => openSliderHandler(16)}
                        >
                            {/* <img
                                src={Pool}
                                alt="Pool"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Pool_Blur}
                                large={Pool}
                                alt="Pool"
                            />
                        </figure>
                        <figure
                            className="gallery__item--5"
                            onClick={() => openSliderHandler(10)}
                        >
                            {/* <img
                                src={Kitchen}
                                alt="Kitchen"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Kitchen_Blur}
                                large={Kitchen}
                                alt="Kitchen"
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
                            {/* <img
                                src={Master}
                                alt="Master bedroom"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Master_Blur}
                                large={Master}
                                alt="Master Bedroom"
                            />
                        </figure>
                        <figure
                            className="gallery__item--2a"
                            onClick={() => openSliderHandler(2)}
                        >
                            {/* <img
                                src={Bedroom_1}
                                alt="Spare bedroom"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Bedroom_1_Blur}
                                large={Bedroom_1}
                                alt="Spare Bedroom"
                            />
                        </figure>
                        <figure
                            className="gallery__item--3a"
                            onClick={() => openSliderHandler(13)}
                        >
                            {/* <img
                                src={Living_Room_2}
                                alt="Living room"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Living_Room_2_Blur}
                                large={Living_Room_2}
                                alt="Living Room"
                            />
                        </figure>
                        <figure
                            className="gallery__item--4a"
                            onClick={() => openSliderHandler(12)}
                        >
                            {/* <img
                                src={Living_Room_1}
                                alt="Living room"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Living_Room_1_Blur}
                                large={Living_Room_1}
                                alt="Living Room"
                            />
                        </figure>
                        <figure
                            className="gallery__item--5a"
                            onClick={() => openSliderHandler(3)}
                        >
                            {/* <img
                                src={Spare_Room}
                                alt="Spare bedroom"
                                className="gallery__img"
                                loading="lazy"
                            /> */}
                            <BlurredUpImage
                                tiny={Spare_Room_Blur}
                                large={Spare_Room}
                                alt="Spare Bedroom"
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
