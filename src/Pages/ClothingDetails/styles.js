import styled from 'styled-components';
import {BLACK, GREEN, GREY, WHITE} from '../../Styles';

export const Content = styled.div`
  background-color: ${BLACK};
  flex: 1;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  height: 100%!important;


  p{
    color: ${WHITE}
  }

  h1{
    text-transform: uppercase;
    font-weight: 900;
    color: ${GREEN}
  }
  h2{
    color: ${WHITE};
  }
`;
