import React, { useState } from 'react';
import '../cesese/Forma.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/Products';
import { useNavigate } from 'react-router-dom';

function Forma(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredOpis, setEnteredOpis] = useState('');

    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }
    function opisChangeHandler(event) {
        setEnteredOpis(event.target.value);
    }
    function priceChangeHandler(event) {
        setEnteredPrice(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        if (enteredTitle === '' || enteredOpis === '' || enteredPrice === '') {
            return;
        }
        const product = {
            title: enteredTitle,
            description: enteredOpis,
            price: enteredPrice,

            id: new Date().toString(),
        };
        dispatch(addProduct(product));
        // props.saveData(expenseData);
        // setEnteredTitle('');
        // setEnteredOpis('');
        // setEnteredPrice('');
        navigate(-1);
        alert('Uspjesno ste dodali proizvod');
    }
    return (
        <div className='center'>
            <div className='forma-container'>
                <form onSubmit={submitHandler}>
                    <div className='part'>
                        <p>Title</p>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                    </div>
                    <div className='part'>
                        <p>Opis</p>
                        <textarea type='text' rows='5' cols={21} value={enteredOpis} onChange={opisChangeHandler} />
                    </div>
                    <div className='part'>
                        <p>Price</p>
                        <input type='text' value={enteredPrice} max='2024-12-31' onChange={priceChangeHandler} />
                    </div>

                    <div className='button-container'>
                        <button type='submit' className='forma-button'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Forma;
