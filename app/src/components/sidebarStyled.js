import styled from 'styled-components';

const sidebarStyled = styled.div`
  width:  75px;
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
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  div.bottom {
    height: 20%;
  }
  
  .icon {
    width: 50px;
    height: 50px;
    color: #00d4d0;
  }
`;

export default sidebarStyled;