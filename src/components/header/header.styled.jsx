import styled from "styled-components";

const green = "#29B82E";

const MainWrapper = styled.div`
  height: 85vh;
  background: #96abaa;
  padding-top: 25px;
`;

const HeaderMenuItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  > img {
    width: 30px;
    height: 30px;
  }
  > .Header__will-you {
    font-size: 20px;
    font-weight: 800;
    color: white;
  }
`;

const HeaderMenuItemText = styled.span`
  padding: 0 20px;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font: 500 1.2em Consolas, sans-serif;
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 0;
    height: 2px;
    background-color: ${green};
    content: "";
    transition: all 500ms cubic-bezier(0.173, 0.883, 0.3, 1.073) 0s;
  }
  &:hover::after {
    width: 100%;
    transition: all 500ms cubic-bezier(0.173, 0.883, 0.3, 1.073) 0s;
  }
`;
const Logo = styled.img`
  padding: 5px;
  height: 60px;
`;
const Block = styled.div`
  display: flex;
  width: calc(100%-300px);
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  position: relative;
  .Header__software{
    position: absolute;
    top: 18rem;
    left: 25rem;
    font-size: 40px;
    font-weight: 600;
    width: max-content;
    letter-spacing: 5px;
  }
  .Header__search-link {
    display: flex;
    align-items: center;
    > div {
      > a {
        text-decoration: none;
        :hover {
          transition: 0.2s;
          color: white;
        }
        > i {
          ::before {
            content: "⚲";
          }
        }
      }
    }
    > a {
      text-decoration: none;
      padding: 0 5px;
      font-size: 20px;
      font-weight: 800;
      :hover {
        transition: 1s;
        color: white;
        box-shadow: 0px 0px 3px 2px;
      }
    }
  }
`;

export { HeaderMenuItem, HeaderMenuItemText, Logo, Block, MainWrapper };
