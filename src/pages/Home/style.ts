import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: ${props => props.theme["gray-100"]};
  cursor: pointer;
  transition: background-color 0.1s;

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }

`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["green-500"]};
  box-shadow: 0 0 0 2px ${props => props.theme["green-700"]};

  &:hover:not(:disabled){
    background-color: ${props => props.theme["green-700"]};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme["red-500"]};
  box-shadow: 0 0 0 2px ${props => props.theme["red-700"]};
  
  &:hover:not(:disabled){
    background-color: ${props => props.theme["red-700"]};
  }

`
