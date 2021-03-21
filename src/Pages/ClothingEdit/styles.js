import styled from 'styled-components';
import {BLACK, GREEN, WHITE, LUMINOUSGREEN, GREY} from '../../Styles';

export const Content = styled.div`
  background-color: ${BLACK};
  flex: 1;
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  height: 100%!important;

  h1{
    text-transform: uppercase;
    font-weight: 900;
    color: ${GREEN}
  }
  form{
    background: #3AD205;
    max-width: 60%;
    margin: auto;
    padding: 30px;

    input{
      background: ${GREY};
    }
  }
`;
