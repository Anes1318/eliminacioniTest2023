import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../cesese/ProductView.css';

function ProductView(props) {
    const productList = useSelector((state) => state.products);
    const params = useParams();
    const id = params.id;

    const product = productList.products.find((product) => {
        return product.id == id;
    });

    return (
        <div className='productViewContainer'>
            <img className='slika' src={product.thumbnail} alt='šljik' />
            <div className='title-rating'>
                <h1>{product.title}</h1>
                <div className='rating'>
                    <p>{product.price}€</p>
                </div>
            </div>
            <p>{product.description}</p>
        </div>
    );
}

export default ProductView;
