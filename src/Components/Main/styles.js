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
  justify-content: center;
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
  width: 140px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  height: 150px;

  img {
    width: 35px;
    border-radius: 30px;
    float: right;
  }
  strong {
    font-size: 16px;
  }
  p {
    font-size: 12px;
  }

  ul {
    font-size: 13px;
    list-style-type: none;
    width: 100%;
    padding: 0;
    margin-top: 10px;
  }
  li {
    text-align: center;
    border: 1px solid #bfbfbf;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  margin-bottom: 20px;
`;
