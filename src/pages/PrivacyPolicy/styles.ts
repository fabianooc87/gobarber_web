import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    padding: 50px 50px 60px 50px;
    background: #28262e;
    border-radius: 20px;
    color: rgb(153, 149, 145);
    font-size: 40px;
    a:visited {
      color: rgb(153, 149, 145);
    }
    a:link {
      color: #fff;
    }
  }
`;
