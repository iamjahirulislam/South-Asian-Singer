import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {

    const { cartPersons } = props || {};

    const sumReducer = (previousValue, currentPersonValue) => previousValue + parseInt(currentPersonValue.avgIncomePerSong);
    const totalIncomeAddedPerson = cartPersons.reduce(sumReducer, 0);

    const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="cart">
            <h4>Total Added: {shoppingCart} {cartPersons.length} </h4>
            <p>Added Singers Income: $ {totalIncomeAddedPerson}</p>
            <div className="added-list">
                Added Singers List:
                <small>
                    <ul>
                        {
                            cartPersons.map(person => <li key={person.key}> <i className="fas fa-user"></i> {person.name}</li>)
                        }
                    </ul>
                </small>
            </div>
        </div>
    );
};

export default Cart;