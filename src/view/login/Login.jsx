import { Form, Input, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLogin } from "../../feautes/login/loginSlice";

const Login = () => {
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const onFinish = (values) => {
  const { username, password } = values;
  if (username === "admin" && password === "admin") {
   dispatch(setIsLogin(1));
   navigate("/admin");
  } else if (username === "user" && password === "user") {
   dispatch(setIsLogin(0));
   navigate("/");
  } else {
   console.log("danbg nhap that bai");
  }
 };

 const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
 };

 return (
  <Form
   name="basic"
   labelCol={{
    span: 8,
   }}
   wrapperCol={{
    span: 16,
   }}
   initialValues={{
    remember: true,
   }}
   onFinish={onFinish}
   onFinishFailed={onFinishFailed}
   autoComplete="off">
   <Form.Item
    label="Username"
    name="username"
    rules={[
     {
      required: true,
      message: "Please input your username!",
     },
    ]}>
    <Input />
   </Form.Item>

   <Form.Item
    label="Password"
    name="password"
    rules={[
     {
      required: true,
      message: "Please input your password!",
     },
    ]}>
    <Input.Password />
   </Form.Item>

   <Form.Item
    name="remember"
    valuePropName="checked"
    wrapperCol={{
     offset: 8,
     span: 16,
    }}>
    <Checkbox>Remember me</Checkbox>
   </Form.Item>

   <Form.Item
    wrapperCol={{
     offset: 8,
     span: 16,
    }}>
    <Button type="primary" htmlType="submit">
     Submit
    </Button>
   </Form.Item>
  </Form>
 );
};
export default Login;
