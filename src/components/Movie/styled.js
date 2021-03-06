import styled from "styled-components";

export const Overview = styled.div`
  background-color: #fff;
  color: #22254b;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  height: 100%;
  transform: translateY(102%);
`;

export const Wrapper = styled.div`
  background-color: #373b69;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  margin: 1rem;
  width: 22%;

  &:hover {
    ${Overview} {
      transform: translateY(0%);
      transition: 0.3s ease-out;
    }
  }

  @media (max-width: 1024px) {
    width: 28%;
  }

  @media (max-width: 768px) {
    width: 40%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
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

export const Span = styled.span`
  background-color: #22254b;
  font-weight: 700;
  border-radius: 5px;
  padding: 0.5rem;
`;
