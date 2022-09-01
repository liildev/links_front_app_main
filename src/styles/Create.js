import styled from "styled-components";

export const CreateStyled = styled.form`
  margin-top: 2rem;
  padding: 20px;

  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
  border-radius: 10px;

  h2 {
    font-size: 28px;
    font-weight: 700;
  }

  form {
    display: flex;
    align-items: center;

    margin-top: 1rem;
    input {
      font-family: inherit;
      width: 100%;
      border-bottom: 2px solid #11998e;
      font-size: 1.3rem;
      transition: border-color 0.2s;
      border-bottom: 2px solid #bbbbbb;
      margin-right: 10px;
      padding: 10px 0;

      &::placeholder {
        font-size: 16px;
        line-height: 24px;
        color: #bbbbbb;
      }
      &:focus {
        outline: none;
        border-bottom: 2px solid #5468ff;
        transition: border-color 0.2s;
      }
    }
  }

  p {
    height: 20px;
    margin-top: 5px;
    color: crimson;
    font-size: 16px;
    align-self: flex-start;
  }
`;
