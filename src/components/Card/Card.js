import BlurredUpImage from "../BlurredImage";
import "./card.css";

function Card({ details }) {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    {/* <img src={details.src} alt={details.alt} loading="lazy"/> */}
                    <BlurredUpImage tiny={details.blur} large={details.src} alt={details.alt} />
                </div>
                <div className="card-content">
                    <div className="title">
                        <h3>{details.title}</h3>
                    </div>
                    <ul className="list">
                        {details.info.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mobile">
                <div className="card-mobile">
                    <div className="card-image-mobile">
                        <img src={details.src} alt={details.alt} loading="lazy"/>
                    </div>
                    <div className="card-content-mobile flex">
                        <div className="title">
                            <h3>{details.title}</h3>
                        </div>
                        <ul className="list-mobile flex">
                            {details.info.map((detail, idx) => (
                                <li key={idx}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;

// // <div className="card flex">
// //     <div className="card__front"></div>
// //     <div className="card-title">
// //         <h3>{details.title}</h3>
// //     </div>
// //     <div className="card-info title text">
// //         {details.info.map((fact, idx) => (
// //             <p key={idx}>{fact}</p>
// //         ))}
// //     </div>
// // </div>

// <div className="card flex">
//     <div className="card__front"></div>
//     <div className="content flex">
//         <div className="card-title">
//             <h3>{details.title}</h3>
//         </div>
//         <div className="mobile">
//             <div className="mobile-text flex">
//                 {details.info.map((fact, idx) => (
//                     <p key={idx}>{fact}</p>
//                 ))}
//             </div>
//         </div>
//     </div>
//     <div className="overlay">
//         <div className="overlay-text flex">
//             {details.info.map((fact, idx) => (
//                 <p key={idx}>{fact}</p>
//             ))}
//         </div>
//     </div>
// </div>
