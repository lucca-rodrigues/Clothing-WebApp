import styled from 'styled-components';
import {BLACK, GREEN} from '../../Styles';

export const Content = styled.div`
  background-color: ${BLACK};
  display: flex;
  flex: 1;

  > div{
      h1{
        color: ${GREEN};
        text-transform: uppercase;
        text-align: center;
      }
      .card{
        border: none;
        border-radius: 10px;

        p{
          margin-bottom: 4px;
        }
      }
      .card-img, .card-img-bottom, .card-img-top {
        max-width: 300px;
        max-height: 300px;
        border-radius: 10px 10px 0px 0px;
      }
    }
`;
