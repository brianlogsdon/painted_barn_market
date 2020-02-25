import styled from 'styled-components';

const ShopByDepartment = styled.span`
  background:white;
    background-repeat: no-repeat;
background-size: 100% 95%;
position: inline-block;
  display: flex;
  flex-direction: column;
  
img {
    padding: 10px;
    
    height: 200px;
    width: 200px;
    object-fit: cover;
    @media  (max-width:800px) //800px for tablets and phones.
{
    {
        display: block; 
        float: none; 
        width: 70%;
    }
}
  }
  .imageGroup{
    width:100%;
    text-align:center;
 
  
  }
  hr {

  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 2px;
}
h1 {
    text-align:center;
    
    @media  (max-width:800px) //800px for tablets and phones.
{
    {
        display: block; 
        float: none; 
        width: 100%;
    }
}
}


`;

export default ShopByDepartment;