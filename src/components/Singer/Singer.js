import React from 'react';
import './Singer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Singer = (props) => {
    // console.log(props.person);
    const { name, age, picture, avgIncomePerSong, height, maritalStatus, country, category, socialId } = props.person;
    const { facebook, instagram } = socialId;

    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col">
            <div className="card singer-details">
                <div>
                    <img src={picture} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p><small>Category: {category}</small></p>
                        <p>Marital Status: {maritalStatus}</p>
                        <p>Age: {age}</p>
                        <p>Height: {height}</p>
                        <p>Income Per Song: $ {avgIncomePerSong}</p>
                        <p>Country: {country}</p>
                        <div className="social-id">
                            <a href={facebook} target="_blank"><i className="fab fa-facebook-square"></i></a>
                            <a href={instagram} target="_blank"><i className="fab fa-instagram"></i></a> <br /> <br />
                        </div>
                        <button className="btn btn-primary btn-regular" onClick={() => props.handleAddToCart(props.person)}> {shoppingCart} add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Singer;