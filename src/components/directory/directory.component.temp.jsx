import React from 'react';

import image1 from '../../assets/product-images/IMG_1614.JPG'
import image2 from '../../assets/product-images/IMG_1615.JPG'
import image3 from '../../assets/product-images/IMG_1616.JPG'

import './directory.styles.scss';

const Directory = () => {
  return (
    <div className="directory">
      <h1>Inspiration Is All Around</h1>
      <p className="about-text">My work reflects a love of the rich cultural heritage of not only the Mountains of North Carolina where I grew up, but also as a result of traveling across our beautiful and diverse country.
I take inspiration from the luscious forests and cool streams that meander through our state, and the oceans on our coast.
I have not only lived on land but also on the sea, and have accumulated a knowledge and appreciation of both. As a result my work reflects the influence and creativity found in all of this.
I have studied various metalworking techniques over the years combining these with natural stones and other elements of nature to create unique and individual designs.
My Jewelry is designed and handcrafted with passion, to create wearable art to be enjoyed for years to come.</p>
      <h2>- Lynell</h2>
      <img src={image1} alt="necklace" className="product-image"/>
      <span>Sterling Silver & Copper Cuff</span>
      <img src={image2} alt="cuff" className="product-image"/>
      <img src={image3} alt="necklace" className="product-image"/>
    </div>
  )
}

export default Directory;