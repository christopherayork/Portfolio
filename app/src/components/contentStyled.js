import styled from "styled-components";

const ContentStyled = styled.div`
  width: 100%;
  background: #222;
  color: #eee;
  
  &.home {
    padding: 10px;
    display: flex;
    align-items: center;
    
    div.intro {
      padding-left: 10px;
      
      h1.mainline {
        font-size: 3rem;
        padding-left: 90px;
        
        span.first-letter {
          color: #db3102;
          text-shadow: -3px -2px #00d4d0;
        }
      }
      
      p.tagline {
        padding-left: 50px;
        color: #bbb;
      }
      
      button.contact {
        margin-left: 50px;
        background: inherit;
        border: 2px solid #00d4d0;
        transition: border 1s;
        
        &:hover {
          border: 2px solid #db3102;
        }
        
        a {
          padding: 10px;
          text-decoration: none;
          color: #00d4d0;
          font-size: 1.2rem;
          transition: color 1s;
          
          &:hover {
            color: #db3102;
          }
        }
      }
      
      p.html {
        font-family: 'Sriracha', sans-serif;
        color: #bbb;
        
        &.one {
          padding-left: 10px;
        }
        
        &.two {
          padding-left: 50px;
        }
      }
    }
  }
`;


export default ContentStyled;