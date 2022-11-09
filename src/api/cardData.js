import Master from "../assets/bedroom_1_beds.jpg";
import Master_Blur from "../assets/bedroom_1_beds_blur.jpg";
import Bathroom from "../assets/master_bathroom.jpg";
import Bathroom_Blur from "../assets/master_bathroom_blur.jpg";
import Laundry from "../assets/laundry_room.jpg";
import Laundry_Blur from "../assets/laundry_room_blur.jpg";

export const cardData = [
    {
        id: 0,
        title: "Beds",
        src: Master,
        blur: Master_Blur,
        alt: " Master Bedroom",
        info: [
            "Bedroom 1: Queen Bed",
            "Bedroom 2: Queen Bed",
            "Bedroom 3: Twin Beds (2)",
        ],
    },
    {
        id: 1,
        title: "Baths",
        src: Bathroom,
        blur: Bathroom_Blur,
        alt: "Bathroom",
        info: [
            "2 Full Bathrooms",
            "Shampoo, Conditioner, & Body Soap",
            "Hair Dryer",
            "* Towels are provided",
        ],
    },
    {
        id: 2,
        title: "Amenities",
        src: Laundry,
        blur: Laundry_Blur,
        alt: "Washer & Dryer",
        info: [
            "Pool",
            `75" HDTV with Hulu & Netflix`,
            "Electric Fireplace",
            "Plus more",
        ],
    },
];
