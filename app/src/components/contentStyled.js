import styled from "styled-components";

const ContentStyled = styled.div`
  width: 100%;
  background: #222;
  color: #eee;
  
  &.home, &.about, &.skills {
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
      
      
      h1.mainline.about {
          color: #00d4d0;
          text-shadow: -3px -2px #db3102;
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
        color: #444;
        
        &.one {
          padding-left: 10px;
        }
        
        &.two {
          padding-left: 50px;
        }
      }
      
      p.about {
        padding-left: 90px;
        width: 60%;
        font-size: 0.9rem;
      }
    }
  }
  
  &.skills {
  
    .graph.col {
      @media (max-width: 600px) {
        display: none;
      }
    }
    
    p.html {
      @media (max-width: 800px) {
        font-size: 0.8rem;
      }
    }
    
    div.intro { 
      
      p.about {
        font-size: 0.75rem;
      }
      
      h1.mainline {
        
        @media (max-width: 800px) {
          font-size: 2rem;
        }
      }
    }
    
    svg g {
      fill: #9e2b23;
      fill-opacity: 1;
      transition: fill 1s;
      
       &:hover {
        fill: #cc392f;
       }
    }
    
    svg g text {
      fill: #fff;
      fill-opacity: 0.9;
      stroke: #00d4d0;
      stroke-width: 0.1;
    }
    
    .intro.col {
      width: 49%;
      
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    .graph.col {
      width: 49%;
      
      
      .hover-text {
        font-size: 0.2rem;
        font-weight: bold;
        opacity: 0.4;
        transition: opacity 0.5s, background 0.5s;
        
        &:hover {
          //background: #00d4d0;
          opacity: 1;
        }
      }
    }
  }
`;


export default ContentStyled;