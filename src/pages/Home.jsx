import React, { useState } from 'react';
import Card from '../comps/Card';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
function Home(props) {
    const productList = useSelector((state) => state.products);
    const navigate = useNavigate();
    const [brojac, setBrojac] = useState(9);
    return (
        <div className='container'>
            <button
                className='loadMoreButton'
                onClick={() => {
                    navigate(`/product/add`);
                }}>
                Add Item
            </button>
            {productList.products.length != 0 ? (
                <div className='listView'>
                    {productList.products.map((product, index) => {
                        return index < brojac ? <Card image={product.thumbnail} key={product.id} id={product.id} title={product.title} description={product.description} price={product.price} discountPercentage={product.discountPercentage}></Card> : null;
                    })}
                </div>
            ) : (
                <p>Nema pite</p>
            )}

            {brojac < productList.products.length ? (
                <button
                    className='loadMoreButton'
                    onClick={() => {
                        console.log(productList.products.length);
                        setBrojac(brojac + 9);
                    }}>
                    LOAD MORE
                </button>
            ) : null}
        </div>
    );
}

export default Home;
