import React from 'react';
import { Link } from 'react-router-dom';
import { convertedValue, formatDate } from '../services/utils';

function CustomerOrderCard(item) {
  const { id, status, saleDate, totalPrice } = item;

  return (
    <Link to={ `orders/${id}` }>
      <div>
        <h3>Pedido</h3>
        <h3 data-testid={ `customer_orders__element-order-id-${id}` }>{ id }</h3>
      </div>
      <h3 data-testid={ `customer_orders__element-delivery-status-${id}` }>{ status }</h3>
      <div>
        <h3
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          { formatDate(saleDate) }
        </h3>
        <h3
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          { convertedValue(totalPrice) }
        </h3>
      </div>
    </Link>
  );
}

export default CustomerOrderCard;
