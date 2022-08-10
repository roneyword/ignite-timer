import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav{
    display: flex;
    gap: 0.5rem;

    a{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;

      color: ${props => props.theme["gray-100"]};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.2s;

      &:hover{
        border-bottom: 3px solid ${props => props.theme["green-500"]};
      }

      &.active{
        svg{
          path{
            fill: ${props => props.theme["green-500"]};;
          }
        }
        
      }
    }
  }
`