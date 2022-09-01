import styled from "styled-components";

export const Div = styled.div`
  background-color: #5468ff;
`;

export const Nav = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 0;

  & > a {
    font-size: 22px;
    font-weight: 700;
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    margin-left: auto;
    gap: 30px;

    #check {
      display: none;
    }

    li {
      a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        padding: 10px;

        &:hover {
          box-shadow: 0 0.5em 0.5em -0.4em black;
          transform: translateY(-0.25em);
        }
      }

      .active {
        box-shadow: 0 0.5em 0.5em -0.4em black;
        transform: translateY(-0.25em);
      }
    }
  }
`;
