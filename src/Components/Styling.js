import { Link } from 'react-router-dom';
import styled from 'styled-components'; 

export const Content = styled.div`
   overflowY: scroll; 
   height: 700px;
`;
  
export const RouterLink = styled(Link)`
   cursor: pointer; 
   transition: all 0.2s ease-in-out; 
   text-decoration: none; 
`;