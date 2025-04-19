import React from 'react'
import './card.css'

export const Card = ({ imageUrl, title, text, link }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {text}
                </p>
                <a href={link} className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>

    )
}

export const FoodCard = ({ imageUrl, price, title, weight }) => {
    return (
        <div className="card" style={{ width: "18rem", border: 0 }}>
            <img src={imageUrl} className="card-img-top food-image" alt="..." />
            <div className="card-body ">
                <h5 className="card-title food-price">{price}</h5>
                <p className="card-text food-title">
                    {title}
                </p>
                <p className="card-text food-weigth">
                    {weight}
                </p>
            </div>
        </div>

    )
}

