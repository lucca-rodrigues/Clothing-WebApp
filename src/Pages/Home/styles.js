import styled from 'styled-components';
import {BLACK, GREEN, WHITE, LUMINOUSGREEN} from '../../Styles';

export const Content = styled.div`
  background-color: ${BLACK};
  /* display: flex;
  flex: 1; */

  > div{
      h1{
        color: ${GREEN};
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
      }
      .card{
        border: none;
        border-radius: 10px;
        background: transparent;

        p{
          margin-bottom: 4px;
          text-align: center;
          color: ${WHITE}
        }
      }
      .card-img, .card-img-bottom, .card-img-top {
        max-width: 250px;
        max-height: 250px;
        border: 5px solid ${WHITE};
        border-radius: 50%;

      }
      .card-title {
          margin-bottom: .75rem;
          font-weight: 900;
          color: ${GREEN};
          text-align: center;
          text-transform: uppercase;
      }

      .dropdown button {
        float: right;
        border:none;
        background: transparent;
        color: ${LUMINOUSGREEN}
      }
      .dropdown-toggle::after{
        display: none;
      }
      .dropdown .btn-success:not(:disabled):not(.disabled).active, .btn-success:not(:disabled):not(.disabled):active, .show>.btn-success.dropdown-toggle {
        color: ${LUMINOUSGREEN};
        background: transparent;
        border: none;
      }
      .btn-success:not(:disabled):not(.disabled).active:focus, .btn-success:not(:disabled):not(.disabled):active:focus, .show>.btn-success.dropdown-toggle:focus {
        box-shadow: none!important;
      }

      a{
        color: ${BLACK};
        svg{
          margin-right: 10px;
        }
      }

      .add-new{
        display: flex;
        justify-content: flex-end;
      }
    }
`;
