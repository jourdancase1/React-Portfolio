import React from 'react';
import { Link } from "react-router-dom";

function CardItem(props) {
    return(
        <>
        <li className="cards__item">
            <Link className="cards__item__link">
                <figure className="cards__item__pic-wrap">
                    <img src={props.src} alt="" className="cards__item__img"/>
                </figure>
                <div className="cards__item__info">
                    {/* <h5 className="cards__item__text">{props.text}</h5> */}
                    <a href={props.url}>{props.text}</a>
                </div>
            </Link>
        </li>
        </>
    )
}

export default CardItem;
