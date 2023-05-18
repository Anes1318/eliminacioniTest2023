import React from 'react';
import '../cesese/Card.css';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/Products';
import { useNavigate } from 'react-router-dom';
function Card(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className='cardContainer'>
            <img className='image' src={props.image} alt='šljik' />
            <div className='titlePriceDesc'>
                <div className='titlePrice'>
                    <div
                        onClick={() => {
                            navigate(`/product/${props.id}`);
                        }}
                        className='title'>
                        {props.title.length > 28 ? props.title.substr(0, 28) + '...' : props.title}
                    </div>
                    <div>{props.price} €</div>
                </div>
                <p>{props.description.length > 100 ? props.description.substr(0, 100) + '...' : props.description}</p>
            </div>
            <div className='cardButtonContainer'>
                <button
                    className='cardButton'
                    onClick={() => {
                        navigate(`/product/edit/${props.id}`);
                    }}>
                    EDIT
                </button>
                <button className='cardButton' onClick={() => dispatch(deleteProduct(props.id))}>
                    DELETE
                </button>
            </div>
        </div>
    );
}

export default Card;
