import FormCard from '@/components/Card/FormCard'
import { useAsyncFn } from '@/hooks/useAsync'
import { useUser } from '@/hooks/user'
import { loginUser } from '@/service/user'
import { Form, Input, Checkbox, Button, message } from 'antd'
import { useRouter } from 'next/router'

export default function Login () {
  const router = useRouter()
  const { handleAddUserData } = useUser()
  const { loading, execute: login } = useAsyncFn(loginUser)
  function onFinish (value: any) {
    const { email, password } = value
    login(email, password)
    .then((res : any) => {
      message.success('Login success!')
      handleAddUserData(res)
      router.push('/')
    })
    .catch((res: any) => {
      message.error(res)
    })
    
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
            <Button  loading={loading} type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </FormCard>
    )
}