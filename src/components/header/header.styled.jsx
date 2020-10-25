import styled from "styled-components";

const green = "#29B82E";

const HeaderMenuItem = styled.div`
  height: 100%;
  display: flex;
`;

const HeaderMenuItemText = styled.span`
  padding: 10px 20px;
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
`;

const MainWrapper = styled.div`
  height: 85vh;
  background: #A9F5F2 url('./img1.jpg');
`;

export { HeaderMenuItem, HeaderMenuItemText, Logo, Block, MainWrapper };
