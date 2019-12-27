import React from "react";
import Male from "../../img/dog_boy_Avatar.PNG";
import Female from "../../img/dog_girl_Avatar.PNG";
import { Pagination } from "antd";

import { Container, Filter, Results, Card, Wrapper } from "./styles";

export default function Main() {
  return (
    <Container>
      <img
        src="https://www.adopets.com/static/media/adopets-primary.40eeabc5.svg"
        alt
      />
      <Filter>Options</Filter>
      <Results>
        <Wrapper>
          <Card>
            <div>
              <img src={Male} alt="avatar" />
              <strong>Bug</strong>
              <p>Border Terrier</p>
            </div>
            <ul>
              <li>Male</li>
              <li>Small</li>
              <li>Adult</li>
            </ul>
          </Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Wrapper>
        <Pagination defaultCurrent={1} total={35} pageSize={5} />
      </Results>
    </Container>
  );
}
