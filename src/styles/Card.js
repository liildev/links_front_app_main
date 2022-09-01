import styled from "styled-components";

export const Card = styled.div`
  margin-top: 2rem;
  width: 50%;
  h2 {
    font-size: 38px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    margin-top: 2rem;

    padding: 1rem;
    box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);

    border-radius: 10px;

    &:hover {
      background-color: #5468ff;
      color: white;

      a {
        color: white;
      }

      strong {
        color: white;
      }
    }

    a {
      margin-left: 5px;
      color: #5468ff;
    }

    strong {
      color: #bbbbba;
      margin-left: 5px;
    }
  }
`;
