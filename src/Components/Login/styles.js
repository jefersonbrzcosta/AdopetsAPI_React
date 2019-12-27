import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: Roboto, Arial, serif;
  background-color: #ebebeb;
  display: flex;
  align-content: center;
  align-items: center
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div`
  background-color: white;
  display: flex;
  font-size: 10px;
  font-weight: bold;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  flex-direction: column
  width: 250px;
  padding-top: 20px;
  border-radius: 10px;
  height: 250px;
`;
