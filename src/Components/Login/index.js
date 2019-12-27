import React from "react";
import { Form, Icon, Input, Button } from "antd";

import { Container, Card } from "./styles";

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Card>
          <img
            src="https://www.adopets.com/static/media/adopets-primary.40eeabc5.svg"
            alt
          />
          WELCOME
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please input your e-mail!" }
                ]
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
                loading={false}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Container>
    );
  }
}

const Login = Form.create({ name: "normal_login" })(NormalLoginForm);

export default Login;
