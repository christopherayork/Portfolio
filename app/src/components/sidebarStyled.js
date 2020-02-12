import styled from 'styled-components';

const SidebarStyled = styled.div`
  width:  50px;
  height: 100vh;
  padding: 0 5px 0 5px;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  div.top {
    height: 20%;
  }
  div.middle {
    height: 40%;
  }
  
  div.bottom {
    height: 20%;
  }
  div.top, div.middle, div.bottom {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
  }
  
  .icon {
    width: 30px;
    height: 30px;
    color: #00d4d0;
    transition: color 1s, border-bottom 1s;
    box-sizing: border-box;
    padding: 2px;
    
    &:hover {
      color: #db3102;
      border-bottom: 1px solid #db3102;
    }
  }
  
  .icon.social {
    color: #dbbe02;
  }
`;

export default SidebarStyled;