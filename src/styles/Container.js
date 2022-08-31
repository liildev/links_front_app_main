import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  /* max-width: 1393px; */
  margin: 0 auto;
  padding: 0 100px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0 50px;
  } ;
`;
