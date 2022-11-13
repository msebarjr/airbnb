import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

import "./modal.css";

function Modal({ closeModal }) {
    return createPortal(
        <>
            <div className="modal_overlay" onClick={closeModal} />
            <div className="modal">
                <div className="header">
                    <AiOutlineClose onClick={closeModal} className="close" />
                </div>
                <div className="header_title">
                    <h5>About this space</h5>
                </div>
                <div className="content">
                    <p>
                        This newly updated home features 3 bedrooms, 2
                        bathrooms, and a private heated pool. This single level
                        home is located within minutes to many shopping and
                        restaurant plazas. You will appreciate all the amenities
                        this home has to offer and the many activities to do in
                        the surrounding areas.
                    </p>
                </div>
                <div className="space">
                    <h5>The space</h5>
                    <p>
                        Enjoy this thoroughly updated home with a private
                        swimming pool for family or friend gatherings looking
                        for the perfect getaway to south Florida! You'll have
                        everything you need for a pleasant and comfortable stay
                        in this upscale single level home in Boca Raton. You're
                        conveniently located to some of the best shopping and
                        food plazas, minutes from multiple beaches, parks, and
                        country clubs with some of the best golfing and tennis
                        Boca has to offer.
                    </p>
                    <p>
                        Once you step inside, you will find an open,
                        air-conditioned living space with all new furnishings.
                        The modern living room is centrally located to all 3
                        bedrooms, and kitchen. This room features a leather
                        sectional with soft pillows and a cozy blanket, a brand
                        new 4k HD flat screen TV, and a wall mounted temperature
                        controlled fire place. You also have direct access to
                        the private heated pool through the glass sliding doors
                        through the living and kitchen area. You will find
                        plenty of inflatable pool floats, and two reclining
                        lounge chairs to relax in.
                    </p>
                    <p>
                        Back inside you will find a fully equipped kitchen with
                        ample cabinet and counter space and all your essential
                        appliances. Enjoy the island bar seating to socialize
                        while preparing your favorite meals or baking!
                    </p>
                    <p>
                        Once you're ready to head to bed for the night you will
                        find one of the 3 bedrooms is a king suite with a
                        walk-in closet, en suite bathroom, and a set of sliding
                        glass doors that lead to the private heated pool and
                        backyard. The other two bedrooms feature a queen bed,
                        and two twins with their own closets.
                    </p>
                    <p>
                        Additional amenities include free high speed WiFi, and a
                        private washer and dryer.
                    </p>
                </div>
                <button
                    className="btn btn-primary btn-close"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </>,
        document.getElementById("portal")
    );
}

export default Modal;
