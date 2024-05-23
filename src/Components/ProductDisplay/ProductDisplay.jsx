// ProductDisplay.js
import React, { useState } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import DescriptionBox from '../DescriptionBox/DescriptionBox'; // Asegúrate de que la ruta es correcta

const ProductDisplay = (props) => {
    const { product } = props;
    const [mainImage, setMainImage] = useState(product.image); // Estado para la imagen principal

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img 
                        src={product.image} 
                        alt="Main product thumbnail" 
                        onClick={() => setMainImage(product.image)} 
                        className="thumbnail"
                    />
                    {product.additionalImages.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            alt={`Product thumbnail ${index + 1}`} 
                            onClick={() => setMainImage(img)} 
                            className="thumbnail"
                        />
                    ))}
                </div>
                <div className="productdisplay-img-container">
                    <img className='productdisplay-main-img' src={mainImage} alt="Main product" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_icon} alt="Star" />
                    <img src={star_dull_icon} alt="Dull star" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">{product.old_price}</div>
                    <div className="productdisplay-right-price-new">{product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <DescriptionBox description={product.full_description} />
            </div>
        </div>
    );
}

export default ProductDisplay;




