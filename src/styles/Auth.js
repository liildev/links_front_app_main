import styled from "styled-components";

export const StyledAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
  width: 40%;
  height: 50%;
  box-shadow: 0px 2px 25px rgba(187, 187, 187, 0.35);
  border-radius: 20px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  position: relative;

  input {
    width: 100%;
    margin-top: 2rem;
    padding: 0.8rem 0;
    border: none;
    border-bottom: 2px solid #bbbbbb;
    transition: 0.5s ease-in;

    &::placeholder {
      font-size: 16px;
      line-height: 24px;
      color: #bbbbbb;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid #5468ff;
      transition: 0.5s ease-in-out;
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

export const ButtonUp = styled.button`
  margin-top: 2rem;
  margin-left: 10px;
  align-items: center;
  appearance: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    #5adaff 0,
    #5468ff 100%
  );

  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 02px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }
  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export const ButtonIn = styled.button`
  align-items: center;
  background-color: #fcfcfd;
  border-radius: 4px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  height: 48px;
  justify-content: center;
  line-height: 1;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
