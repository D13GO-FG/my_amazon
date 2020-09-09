import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue();

	function getBasketTotal(product) {
		let element = 0;
		for (let i = 0; i < product.length; i++) {
			element = element + product[i].price;
		}
		return element;
	}

	return (
		<div className="subtotal">
			<CurrencyFormat
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket?.length} items):
							<strong>{`${value}`}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" />
							This order contains a gitf
						</small>
					</>
				)}
			/>
			<button>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
