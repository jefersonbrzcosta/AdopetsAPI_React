import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  font-family: Roboto, Arial, serif;
  background-color: #ebebeb;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100vh;

  > img {
    position: absolute;
    top: 0;
    margin-top: 20px;
  }
`;

export const Filter = styled.div`
  background-color: white;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  flex-direction: column;
  width: 250px;
  padding: 10px;
  border-radius: 10px;
  height: 70%;
`;

export const Results = styled.div`
  background-color: white;
  display: flex;
  font-size: 15px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 10px;
  border-radius: 10px;
  height: 70%;
  margin-left: 15px;
`;

export const Card = styled.div`
  background-color: #ffdeea;
  display: flex;
  flex-direction: column;
  width: 170px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  height: 150px;

  img {
    width: 35px;
    border-radius: 30px;
    float: right;
  }
  p {
    font-size: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
