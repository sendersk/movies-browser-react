import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #373b69;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0,0,0,0.1);
  overflow: hidden;
  position: relative;
  margin: 1rem;
  width: 22%;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Header = styled.h3`
  margin: 0;
`;

export const Overview = styled.div`
  background-color: #fff;
  color: #22254b;
  padding: 1rem;
  position: absolute;
  bottom:0;
  left: 0;
  right:0;

  
  transform: translateX(100%);
  
`