import React, { useState, useEffect } from "react";
import { Form, Icon, Input, Button } from "antd";

import { Container, Card } from "./styles";
import axios from "axios";

function NormalLoginForm(props) {
  const [token, setToken] = useState(0);
  const [loading, setLoading] = useState(false);
  const apiKey = "505763d6-4202-4b05-9efc-93b366939bcf";

  // Start session here:
  async function getToken() {
    const { data } = await axios.post(
      `https://test.adopets.app/v1/auth/session-request`,
      {
        system_api_key: apiKey
      }
    );
    setToken(data.data.access_key);
  }

  // Login function
  async function login(email, password) {
    setLoading(true);
    const accessKey = await axios.post(
      `https://test.adopets.app/v1/auth/session-register`,
      {
        organization_user: {
          email: email,
          password: password
        }
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    if (accessKey.data.code !== 200) {
      alert(accessKey.data.message);
      setLoading(false);
      return;
    }
    localStorage.setItem("token", accessKey.data.data.access_key);
    props.history.push("/main");
  }

  // Get credentials
  useEffect(() => {
    getToken();
  }, []);

  // Function to handle login form:
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        const { email, password } = values;
        login(email, password);
      }
    });
  };
  const { getFieldDecorator } = props.form;

  return (
    <Container>
      <Card>
        <img
          src="https://www.adopets.com/static/media/adopets-primary.40eeabc5.svg"
          alt="logo"
        />
        WELCOME
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your e-mail!" }]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button colorit"
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
}

const Login = Form.create({ name: "normal_login" })(NormalLoginForm);

export default Login;
