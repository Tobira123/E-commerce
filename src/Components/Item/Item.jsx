import React, { useEffect } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const Item = (props) => {
  // Log para verificar la actualización de props
  useEffect(() => {
    console.log(`Cargando producto ${props.id} con imagen ${props.image}`);
  }, [props.id, props.image]);

  return (
    <div className='item'>
      <LazyLoad height={200} offset={100} once placeholder={<div>Cargando...</div>}>
        <Link to={`/product/${props.id}`}>
          <img onClick={() => window.scrollTo(0, 0)} src={props.image} alt={props.name} loading="lazy" />
        </Link>
      </LazyLoad>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          {props.new_price}
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;


