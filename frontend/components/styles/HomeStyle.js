import styled from 'styled-components';

const HomeStyle = styled.span`
  background:white;
    background-repeat: no-repeat;
background-size: 100% 95%;
position: inline-block;
  display: flex;
  flex-direction: column;
  
img {
    
    float: left;
    width: 60%;
    height: 400px;
    object-fit: cover;
    @media  (max-width:800px) //800px for tablets and phones.
{
    {
        display: block; 
        float: none; 
        width: 100%;
    }
}
  }
h3 {
    width: 30%;
    
    float: right;
    padding: 3px;
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

export default HomeStyle;