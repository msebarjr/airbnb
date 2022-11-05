import Master from "../assets/bedroom_1_beds.jpg";
import Bathroom from "../assets/master_bathroom.jpg";
import Laundry from "../assets/laundry_room.jpg";

export const cardData = [
    {
        id: 0,
        title: "Beds",
        src: Master,
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
        alt: "Washer & Dryer",
        info: [
            "Pool",
            `75" HDTV with Hulu & Netflix`,
            "Electric Fireplace",
            "Plus more",
        ],
    },
];
