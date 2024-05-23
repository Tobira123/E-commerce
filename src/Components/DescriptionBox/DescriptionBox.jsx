// DescriptionBox.js
import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = ({ description }) => {
  return (
    <div>
      
        {/* <div className="descriptionbox-nav-box">
          Descripción
          </div> */}
        {/* <div className="descriptionbox-nav-box fade">Reviews (122)</div> */}
      
      <div className="descriptionbox-description description-nav-box" >
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DescriptionBox;








