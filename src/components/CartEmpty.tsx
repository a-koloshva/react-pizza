import React from 'react';
import { Link } from 'react-router-dom';

import cartEpmtyImg from '../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => (
  <div className="content">
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>В корзине пусто</h2>
        <p>
          Скорее всего, Вы ещё не добавили пиццу в корзину.
          <br />
          Для того, чтобы выбрать пиццу, перейдите на главную страницу.
        </p>
        <img src={cartEpmtyImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </div>
  </div>
);

export default CartEmpty;
