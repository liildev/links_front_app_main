import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 100px;
  background-color: #5468ff;

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

    li {
      a {
        position: relative;
        color: white;

        text-decoration: none;
        font-size: 18px;
        font-weight: 500;
        padding: 10px 0;

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

  @media (max-width: 817px) {
    & > a {
      font-size: 18px;
    }

    ul li a {
      font-size: 14px;
    }
  }
`;
