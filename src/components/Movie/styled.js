import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #373b69;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
  overflow: hidden;
  margin: 1rem;
  width: 250px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`;

export const Header = styled.h3`
  margin: 0;
`;
