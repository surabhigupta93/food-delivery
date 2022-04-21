import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Checkbox, Divider, Rate, Card } from 'antd'
import { Footer } from 'antd/lib/layout/layout';

const Login = () => {
  const navigate=useNavigate()
    const onFinish = () => {
      navigate('/dashboard')
    }
    return (
      <div className="main-container">
        <div className="login-container">
        <div className="form-container">
           <div className="login-heading">Login</div>
           <Form
           name="normal_login"
           className="login-form"
           layout="vertical"
           initialValues={{
             remember: true,
           }}
           onFinish={onFinish}
           >
         <div className="login-subheading">Sign in with your data that you entered during your registration</div>
           <Form.Item
            label="Username"
            name="username"
            className="login-input"
            rules={[{ required: true, message: 'Please input your username!' }]}
           >
            <Input />
            </Form.Item>
            <Form.Item
        label="Password"
        name="password"
        className="login-input"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox className="login-check">Keep me logged In</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
      <div className="forgot-password">Forgot Password</div>
        </Form>
        </div> 
        <div className="signup-text">Don't have an account?<span> Sign Up</span></div>
        </div>
        <div className="media-container">
        <Card className="review-container">
        <div className="review-header">
        <span className="title">Overall Rating</span>
        <span>4.2 <Rate className="start-rating" defaultValue={4} /></span>
        <Button>Leave review</Button>
        </div>
        <Divider></Divider>
        </Card>
        <Card className="other-container">
          <img className="other-img" src="/images/card-images/other.png" />
            <div className="other-title">Roll Set</div>
            <div className="other-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, modi! Voluptate repellat at pariatur recusandae</div>
            <div className="other-price">$22.46</div>
        </Card>
        <Card className="other-container-bottom">
            <img className="other-img-bottom" src="/images/card-images/other.png" />
            <div className="details-container">
            <div className="other-title-bottom">Roll Set</div>
            <div className="other-description-bottom">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem, modi! Voluptate repellat at pariatur recusandae</div>
            <div className="other-price-bottom">$22.46</div>
            </div>
            <div className="other-price-container-bottom">
              <div><span> - </span> 1 <span> +</span></div>
              <Button type="default" className="btn-price"> + Add to Cart</Button>
            </div>
        </Card>
        <div className="footer">
        <h4>Leave reviews for all meals</h4>
        <h6>Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.</h6>
        </div>
        </div>
      </div>
    )
}

export default Login
