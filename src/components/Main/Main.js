
import React from 'react';
import Singer from '../Singer/Singer';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import './Main.css'

const Main = () => {
    const [persons, setPersons] = useState([]);
    const [cartPersons, setCartPerson] = useState([]);
    const [searchPerson, setSearchPerson] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => {
                setPersons(data)
                setSearchPerson(data)
            })
    }, []);
    const handleAddToCart = person => {
        const newCartPerson = [...cartPersons, person];
        setCartPerson(newCartPerson);
    };

    const handleSearch = (event) => {
        const searchingText = event.target.value;
        const matchedPerson = persons.filter(person => person.name.toLowerCase().includes(searchingText.toLowerCase()));
        setSearchPerson(matchedPerson);
    }
    return (
        <>
            {/* ----search container ---  */}
            <div className="search-container">
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search your favourite singer name here" />
            </div>
            {/* main container */}
            <div className="container main-container">
                {/* singer container */}
                <div className="singer-container row row-cols-1 row-cols-md-3 g-4">
                    {
                        searchPerson.map(person => <Singer
                            handleAddToCart={handleAddToCart}
                            key={person.key}
                            person={person}></Singer>)
                    }
                </div>
                {/* cart container */}
                <div className="cart-container">
                    <Cart cartPersons={cartPersons}></Cart>
                </div>
            </div>
        </>
    );
};

export default Main;