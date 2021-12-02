import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 30px;

  button + button {
    margin-left: 10px;
  }
`;
