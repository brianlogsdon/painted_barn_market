import React, { Component } from 'react';
import HomeStyle from './styles/HomeStyle';

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
 
  <HomeStyle>    
  <div >
    <div >
      <img  src="https://i.pinimg.com/originals/a3/40/a1/a340a19500dd6abcc59bf1c270a70226.jpg" alt="First slide"></img>
    </div>
    <div>
    <h3>Lorem ipsum dolor sit amet, ei nam ferri volumus praesent, quo ut solum ubique conclusionemque. Et euismod tacimates prodesset sea, vel quem nibh possit no. Inani constituam id duo, ut quo vitae discere.</h3>
    
    </div>
    
</div>
 </HomeStyle>
    );
  }
}

export default HomePage;