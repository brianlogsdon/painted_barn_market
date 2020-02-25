import React, { Component } from 'react';
import HomeStyle from './styles/HomeStyle';
import ShopByDepartment from './styles/ShopByDepartment';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from './AddToCart';



class HomePage extends Component {


  render() {
    return(
 <div>
  <HomeStyle>    
  <div >
    <div >
      <img  src="/static/sleds.jpg" alt="First slide"></img>
    </div>
    <div>
    <h3>The “Painted Barn Market” was created from a love of painting furniture and looking for a creative outlet.  I discovered chalk and milk paints, fell in love with them, and the rest is history. </h3>
    
    </div>
   
</div>
</HomeStyle>

<ShopByDepartment>

<div>
<hr/>
      <h1> Shop by Department</h1>
      <div className= "imageGroup">
      <img src="/static/sign.jpg" alt="First slide" />
      <img src="/static/clothes.jpg "alt="First slide" />
      <img src="/static/mugs.jpg "alt="First slide" />
      <img src="/static/paint.jpg"alt="First slide" />
      
     </div>
     
      
      

    </div>
    </ShopByDepartment>
 </div>
    );
  }
}

export default HomePage;