import React from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import p1_img from '../Assets/product_1.png';
import p2_img from '../Assets/product_2.png';
import p3_img from '../Assets/product_3.png';
import p4_img from '../Assets/product_4.png';
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Más productos</h1>
      <hr />
      <div className="relatedproducts-item">
        <div className="item">
          <Item
            id={1}
            name="Perfume MONTBLANC para dama"
            image={p1_img}
            new_price="$1720"
            old_price="$2000"
          />
        </div>
        <div className="item">
          <Item
            id={2}
            name="Hermosos abanínicos de diferentes colores"
            image={p2_img}
            new_price="$120"
            old_price="$150"
          />
        </div>
        <div className="item">
          <Item
            id={3}
            name="Hermosos abanínicos de diferentes colores"
            image={p3_img}
            new_price="$120"
            old_price="$150"
          />
        </div>
        <div className="item">
          <Item
            id={4}
            name="Hermosos abanínicos de diferentes colores"
            image={p4_img}
            new_price="$120"
            old_price="$150"
          />
        </div>
        {/* Añade más productos de la misma manera */}
      </div>
    </div>
  );
}

export default RelatedProducts;


