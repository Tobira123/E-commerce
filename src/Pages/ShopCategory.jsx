import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import ScrollReveal from 'scrollreveal';

const ShopCategory = (props) => {

  useEffect(() => {
    ScrollReveal().reveal('.shopcategory-banner',{
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true,
      viewFactor: 0.2
    });
  }, []);



  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(8); // Inicialmente mostramos 8 productos

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8); // Incrementa en 8 el número de productos visibles
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando productos</span>
        </p>
        <div className="shopcategory-sort">
          Filtrado por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product
          .filter(item => props.category === item.category)
          .slice(0, visibleProducts) // Muestra solo los productos visibles
          .map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
      {visibleProducts < all_product.filter(item => props.category === item.category).length && (
        <div className="shopcategory-loadmore" onClick={loadMoreProducts}>
          Explorar más
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
