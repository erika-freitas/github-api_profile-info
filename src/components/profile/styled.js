import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  height: auto;
  margin-left: 8px;
  h1 {
    font-size: 32px;
  }
  h3 {
    font-size: 18px;
  }
  h1, h3, h4 {
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: center;
  margin-top: 8px;
`;

export const WrapperUserExtraInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  a {
    color: blue;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;