import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import convertedValue from '../services/utils';

function Card(product) {
  const { name, price, url_image: urlImage, id } = product;
  const [valueAdd, setValueAdd] = useState(0);
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.wallet);

  useEffect(() => {
    if () {
      
    }
  }, [])
  

  return (
    <div className="card_data">
      <h3
        className="card_title"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h3>
      <img
        src={ urlImage }
        alt={ name }
        style={ { height: '20%', width: '20%' } }
        className="card_description"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p
        className="card_description"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { convertedValue(Number(price)) }
      </p>
      <div>
        <button
          type="button"
          className="button--small button-color-general"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          disabled={ valueAdd > 0 ? false: true }
          onClick={ () => setValueAdd((valueAdd - 1)) }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          value={ valueAdd > 0 ? valueAdd : 0 }
          onChange={ () => setValueAdd((valueAdd)) }
        />
        <button
          type="button"
          className="button--small"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => setValueAdd((valueAdd + 1)) }
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Card;
