import useProgressiveImg from "../hooks/useProgressiveImg";
import "./blurredImage.css";

function BlurredUpImage({ tiny, large, alt }) {
    const [src, { blur }] = useProgressiveImg(tiny, large);

    return (
        <img
            src={src}
            style={{
                width: "100%",
                height: "100%",
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out",
            }}
            alt={alt}
            className="gallery_img"
        />
    );
}

export default BlurredUpImage;
