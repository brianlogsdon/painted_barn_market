import styled from 'styled-components';

const FilterBoxStyle = styled.span`
  background:white;
  float:right;
background-repeat: no-repeat;
background-size: 100% 95%;
position: block;
display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 10px;
  
select {
    margin: 5px;
}



`;

export default FilterBoxStyle