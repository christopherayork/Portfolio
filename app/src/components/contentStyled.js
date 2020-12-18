import styled from "styled-components";

const ContentStyled = styled.div`
  width: 100%;
  background: #222;
  color: #eee;
  
  &.home, &.about, &.skills, &.contact
   {
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
      
      div.contact {
        .item {
          color: #888;
          margin-left: 50px;
        }
      }
      
      span.email {
        margin-left: 50px;
        font-size: 0.8rem;
        
        a {
          text-decoration: none;
          color: #00d4d0;
          transition: 1s color;
          
          &:hover {
            color: #db3102;
          }
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
  
  &.work {
    
    .projects {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      height: 95vh;
      overflow-y: auto;
      
      .project {
        width: 99%;
        margin-top: 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-evenly;
        font-size: 1.25rem;
        
        @media (max-width: 1000px) {
          font-size: 1.25rem;
        }
        
        @media (max-width: 800px) {
          font-size: 0.9rem;
        }
        
        @media (max-width: 600px) {
          font-size: 0.6rem;
          flex-direction: column;
          align-items: center;
          
        }
        
        img {
          max-width: 45%;
          height: auto;
          //object-fit: cover;
          object-fit: scale-down;
          
          @media(max-width: 600px) {
            max-width: 95%;
            margin-bottom: 30px;
          }
        }
        
        .content {
          width: 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 15px 15px 15px;
          box-sizing: border-box;
          
          @media(max-width: 600px) {
            width: 95%;
          }
          
          h2.title {
            padding: 0;
            margin-top: -15px;
          }
          
          
          .stack-list {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            
            li {
              width: 49%;
              
              @media(max-width: 600px) {
                width: 95%;
              }
            }
          }
          
          .buttons {
            width: 100%;
            display: flex;
            justify-content: left;
            
            a {
              max-width: 50%;
              display: flex;
              justify-content: center;
              text-decoration: none;
            }
          }
          
          button {
            background: inherit;
            border: 2px solid #00d4d0;
            transition: border 1s, color 1s;
            color: #00d4d0;
            margin-right: 10px;
            
            &:hover {
              border: 2px solid #db3102;
              color: #db3102;
            }
            
            @media (max-width: 800px) {
              //width: 40%;
              font-size: 1rem;
            }
            
            @media(max-width: 600px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;


export default ContentStyled;