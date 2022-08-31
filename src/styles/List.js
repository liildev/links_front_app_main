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

  @media (max-width: 1023px) {
    table-layout: fixed;

    td {
      white-space: nowrap;
      overflow-y: hidden;
    }

    th:first-child {
      width: 20px !important;
    }

    td:first-child {
      width: 20px !important;
    }

    th:last-child {
      width: 50px !important;
    }
    td:last-child {
      width: 50px !important;
    }
  }

  @media (max-width: 817px) {
    td,
    th {
      font-size: 12px;
    }

    th:first-child {
      width: 15px !important;
    }
    td:first-child {
      width: 15px !important;
    }
    th:last-child {
      width: 30px !important;
    }
    td:last-child {
      width: 30px !important;
    }
  }
`;

export const P = styled.p`
  margin-top: 2rem;
  font-weight: 700;
  font-size: 24px;
`;
