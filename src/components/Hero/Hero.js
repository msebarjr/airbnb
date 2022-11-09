import "./hero.css";

import useProgressiveImg from "../../hooks/useProgressiveImg";
import House from "../../assets/front_daytime.jpg";
import House_Blur from "../../assets/front_daytime_blur.jpg";

function Hero() {
    const [src, { blur }] = useProgressiveImg(House_Blur, House);

    return (
        <section>
            <div className="hero" id="hero">
                <div className="hero__photo">
                    <img
                        src={src}
                        style={{
                            filter: blur ? "blur(20px)" : "none",
                            transition: blur ? "none" : "filter 0.3s ease-out",
                        }}
                        alt="Front of house"
                    />
                    {/* <img src={House} alt="Font of house" loading="lazy" /> */}
                </div>
                <div className="hero__content">
                    <h1 className="heading">
                        Feel at home
                        <br />
                        Away from home
                    </h1>
                    <p>
                        Enjoy this thoroughly updated home with a large in
                        ground pool for family or friend gatherings looking for
                        the perfect getaway to south Florida!
                    </p>
                    <div className="hero__actions flex">
                        <h3 className="heading">Book Now!</h3>
                        <div className="hero__actions-btns flex">
                            <div className="btn btn-primary">
                                <a
                                    href="https://www.airbnb.com/rooms/713005677961026083?source_impression_id=p3_1666723558_WpbulLl7Yf2OCCX1"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Book Airbnb
                                </a>
                            </div>
                            <div className="btn btn-secondary">
                                <a
                                    href="https://t.vrbo.io/QyjtnSNGwub"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Book vrbo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

// function BlurredUpImage({ tiny, large }) {
//     const [src, { blur }] = useProgressiveImg(tiny, large);

//     return (
//         <img
//             src={src}
//             style={{              
//                 filter: blur ? "blur(20px)" : "none",
//                 transition: blur ? "none" : "filter 0.3s ease-out",
//             }}
//         />
//     );
// }
