import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #33658a;
    display: flex;
    align-items: center;
    height: 60px;

    ul {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        list-style: none;

        a {
          color: #bada55;
          text-decoration: none;
          padding: 1em;

          &:hover {
            color: #86bbd8;
          }
        }
      }
    }
  `
};