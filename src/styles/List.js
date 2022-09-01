import styled from "styled-components";

export const Table = styled.table`
  margin-top: 2rem;
  width: 100%;

  padding: 20px;
  box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
  border-radius: 10px;

  td,
  th {
    font-size: 18px;
    padding: 10px;
    box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
    border-radius: 10px;

    a {
      color: #5468ff;
      text-decoration: none;
    }
  }
`;

export const P = styled.p`
  margin-top: 2rem;
  font-weight: 700;
  font-size: 24px;
`;
