import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primaryText};

  div {
    display: flex;
  }
`;
export const ImgContainer = styled.div`
  flex: 1;
  height: 100vh;
`;

export const LoginContent = styled.main`
  width: 40%;
  padding: 5rem;

  div {
    
    &:nth-child(2) {
      border-bottom:  1px solid ${(props) => props.theme.divider}
    }

    h1 {
      margin-top: 3rem;
      font-weight: 500;
    }
  }
`;

export const LoginAndRegister = styled.div`
  display: block;
  margin-top: 4rem;

  div { 
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
 
`;
