import React from 'react';
import {
  Button,
  Form,
  Input,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const Sign: React.FC<{ type: 'signup' | 'signin' }> = ({ type }) => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    console.log(form.getFieldsValue())
  }
  return (
    <Form
      {...formItemLayout}
      form={form}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="账号" name="account" rules={[{ required: true, message: '账号不能为空!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="密码" name="password" rules={[{ required: true, message: '密码不能为空!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item label="确认密码" name="confirmPassword" rules={[{ required: true, message: '确认密码不能为空!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          {type === 'signup' ? '注册' : '登录'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Sign;