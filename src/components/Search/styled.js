import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: flex-end;
  background-color: #373b69;

  @media (max-width: 450px) {
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  margin-right: 30px;

  @media (max-width: 450px) {
    margin-right: 0;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  padding: 6px 12px;
  border: 2px solid #22254b;
  border-radius: 50px;

  &:focus {
    outline: none;
  }
`;
