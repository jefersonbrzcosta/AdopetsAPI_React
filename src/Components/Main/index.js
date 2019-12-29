import React, { useState, useEffect } from "react";
import Male from "../../img/dog_boy_Avatar.PNG";
import Female from "../../img/dog_girl_Avatar.PNG";
import { Pagination, Radio, Button, Select } from "antd";
import axios from "axios";

import { Container, Filter, Results, Card, Wrapper } from "./styles";

export default function Main(props) {
  const [data, setData] = useState([]);
  const [sex_key, setSex_key] = useState();
  const [size_key, setSize_key] = useState();
  const [age_key, setAge_key] = useState();
  const [sort, setSort] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const token = localStorage.getItem("token");

  const { Option } = Select;

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };

  // Get data
  async function getData(page, sort, sex_key, size_key, age_key) {
    const response = await axios.post(
      `https://test.adopets.app/v1/pet/search`,
      {
        search: {
          sex_key,
          size_key,
          age_key,
          _fields: [
            "id",
            "uuid",
            "custom_code",
            "name",
            "specie_id",
            "breed_primary_id",
            "price",
            "created_date",
            "status_key",
            "branch_id",
            "payment_model_key",
            "sex_key",
            "size_key",
            "age_key"
          ],
          specie: {
            with: {
              _fields: ["id", "name"]
            }
          },
          breed_primary: {
            with: {
              _fields: ["id", "name"]
            }
          },
          branch: {
            with: {
              uuid: "ef71cadf-fa9b-4c8b-a1a8-0e31e784c3ff",
              _fields: ["id", "uuid"]
            }
          }
        },
        options: {
          page: page,
          limit: 6,
          sort: sort ? [sort] : []
        }
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    setData(response.data.data.result);
    setTotal(response.data.data.count);
  }

  // Page
  useEffect(() => {
    getData(page, sort, sex_key, size_key, age_key);
  }, [page]);

  // Other changes
  useEffect(() => {
    setPage(1);
    getData(page, sort, sex_key, size_key, age_key);
  }, [sort, sex_key, size_key, age_key]);

  return (
    <Container>
      <img
        src="https://www.adopets.com/static/media/adopets-primary.40eeabc5.svg"
        alt="logo"
      />
      <Filter>
        Options
        <br />
        <p>Sort</p>
        <Select
          defaultValue="Sort by"
          style={{ width: "100%" }}
          onChange={value => setSort(value)}
        >
          <Option value="breed_primary_id">Breed</Option>
          <Option value="sex_key">Sex</Option>
          <Option value="size_key">Size</Option>
          <Option value="age_key">Age</Option>
        </Select>
        <p>Sex</p>
        <Radio.Group
          options={[
            { label: "Male", value: "MALE" },
            { label: "Female", value: "FEMALE" }
          ]}
          onChange={e => setSex_key(e.target.value)}
        />
        <p>Size</p>
        <Radio.Group
          options={[
            { label: "S", value: "S" },
            { label: "M", value: "M" },
            { label: "L", value: "L" },
            { label: "XL", value: "XL" }
          ]}
          onChange={e => setSize_key(e.target.value)}
        />
        <p>Age</p>
        <Radio.Group
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-between"
          }}
          options={[
            { label: "BABY", value: "BABY" },
            { label: "YOUNG", value: "YOUNG" },
            { label: "ADULT", value: "ADULT" },
            { label: "SENIOR", value: "SENIOR" }
          ]}
          onChange={e => setAge_key(e.target.value)}
        />
        <Button
          type="info"
          htmlType="submit"
          className="login-form-button colorit"
          style={{ marginTop: "auto" }}
          onClick={() => window.location.reload()}
        >
          Reset Options
        </Button>
        <Button
          type="danger"
          htmlType="submit"
          className="login-form-button colorit"
          style={{ marginTop: "auto" }}
          onClick={logout}
        >
          Log out
        </Button>
      </Filter>
      <Results>
        <Wrapper>
          {data.map(card => (
            <Card key={card.id}>
              <div>
                <img
                  src={card.sex_key === "MALE" ? Male : Female}
                  alt="avatar"
                />
                <strong>{card.name}</strong>
                <p>{card.breed_primary.name}</p>
              </div>
              <ul>
                <li>{card.sex_key}</li>
                <li>{card.size_key}</li>
                <li>{card.age_key}</li>
              </ul>
            </Card>
          ))}
        </Wrapper>
        <Pagination
          current={page}
          onChange={page => setPage(page)}
          total={total}
          pageSize={6}
        />
      </Results>
    </Container>
  );
}
