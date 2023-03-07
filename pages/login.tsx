import FormCard from '@/components/Card/FormCard'
import { useUser } from '@/hooks/user'
import { Form, Input, Checkbox, Button } from 'antd'
import { useRouter } from 'next/router'

export default function Login () {
  const router = useRouter()
  const { handleAddUserData } = useUser()
  function onFinish () {
    handleAddUserData()
    router.push('/')
  }
    return (
        
        <FormCard title='Login'>
        <Form
      name="basic"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
    </FormCard>
    )
}