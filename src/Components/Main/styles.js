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

export const Filter = styled.div`
  background-color: white;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  flex-direction: column
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  height: 70%;
`;

export const Results = styled.div`
  background-color: white;
  display: flex;
  font-size:15px;
  font-weight: bold;
  align-items: center;
  flex-direction: column
  width: 600px;
  padding: 10px;
  border-radius: 10px;
  height: 70%;
  margin-left: 15px;
`;
