
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import CartCount from './CartCount';
import Signout from './Signout';
import FilterBoxStyles from './styles/FilterBoxStyles';

const ItemFilterBox = () => (
   <FilterBoxStyles>
       <span>
  <p>Filter by</p>
  <select id="Price">
     
  <option value="" disabled value>Price</option>
  <option value="all">All</option>
  <option value="lowHigh">Low to High</option>
  <option value="highLow">High to Low</option>
  
</select>
<select id="Category">
<option value="" disabled defaultValue>Category</option>
<option value="all">All</option>
  <option value="clothes">Clothes</option>
  <option value="signs">Signs</option>
  <option value="paint">Paint</option>
  <option value="mugs">Mugs</option>
</select>

  </span>
  </FilterBoxStyles> 
);

export default ItemFilterBox;