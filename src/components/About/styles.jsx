import styled from 'styled-components';

export default {
  About: styled.div`
    margin: 0 auto;
    margin-top: 10px;
    display: block;
    
    p {
      padding: 10px;
      text-align: center;
      font-family: 'Trebuchet MS', serif;
      font-size: 1.25em;
    }
    small {
        font-size: 0.9em;
        font-style: italic;
    }
    small::before {
        content: " ";
    }
  `
}