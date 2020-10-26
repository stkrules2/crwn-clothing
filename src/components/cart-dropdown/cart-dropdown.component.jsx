import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.compnent';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items' >{
            cartItems.map(cartItem => <CartItem key={cartItem} item={cartItem} />)
        }</div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(Cart);