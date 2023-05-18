import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editProduct } from '../redux/Products';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Edit(props) {
    const navigate = useNavigate();
    const productList = useSelector((state) => state.products);
    const params = useParams();
    const id = params.id;

    const product = productList.products.find((product) => {
        return product.id == id;
    });
    const dispatch = useDispatch();

    const [enteredTitle, setEnteredTitle] = useState(product.title);
    const [enteredPrice, setEnteredPrice] = useState(product.price);
    const [enteredOpis, setEnteredOpis] = useState(product.description);

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

        if (enteredTitle == '' || enteredOpis == '' || enteredPrice == '') {
            return;
        }

        const editedProduct = {
            title: enteredTitle,
            description: enteredOpis,
            price: enteredPrice,

            id: product.id,
        };
        dispatch(editProduct(editedProduct));
        navigate(-1);
        alert('Uspjesno ste izmijenili proizvod');
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

export default Edit;
